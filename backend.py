from flask import Flask, request, jsonify
import math
import random
import numpy as np

app = Flask(__name__)

# -----------------------
# Simple in-memory orderbook
# -----------------------
class OrderBook:
    def _init_(self):
        self.bids = {}  # price -> quantity
        self.asks = {}

    def insert_order(self, side, price, quantity):
        price = float(price)
        quantity = float(quantity)
        book = self.bids if side == 'buy' else self.asks
        book[price] = book.get(price, 0.0) + quantity

    def get_order_book(self):
        bids_sorted = sorted(self.bids.items(), key=lambda x: -x[0])  # highest first
        asks_sorted = sorted(self.asks.items(), key=lambda x: x[0])   # lowest first
        return {
            "bids": [{"price": p, "quantity": q} for p, q in bids_sorted],
            "asks": [{"price": p, "quantity": q} for p, q in asks_sorted],
        }

order_book = OrderBook()

# -----------------------
# Monte Carlo (GBM) simulator
# -----------------------
def monte_carlo_strategy(stock_price, n_simulations=500, days=30, mu=0.0005, sigma=0.01):
    simulations = []
    stock_price = float(stock_price)
    for _ in range(int(n_simulations)):
        path = [stock_price]
        for _ in range(int(days)):
            shock = random.gauss(mu, sigma)
            next_price = path[-1] * math.exp(shock)
            path.append(float(next_price))
        simulations.append(path)
    return simulations

# -----------------------
# Endpoints
# -----------------------
@app.route('/')
def index():
    return jsonify({
        "message": "AI Trading Backend running. Endpoints: /order (POST), /orderbook (GET), /simulate (GET), /sentiment (POST), /portfolio (POST)"
    })

@app.route('/order', methods=['POST'])
def place_order():
    data = request.get_json() or {}
    try:
        side = data.get('side', 'buy').lower()
        if side not in ('buy', 'sell'):
            return jsonify({"error": "side must be 'buy' or 'sell'"}), 400
        price = float(data['price'])
        quantity = float(data['quantity'])
    except (KeyError, TypeError, ValueError):
        return jsonify({"error": "JSON must include price (number) and quantity (number)"}), 400

    order_book.insert_order(side, price, quantity)
    return jsonify({"message": "order placed", "order": {"side": side, "price": price, "quantity": quantity}}), 201

@app.route('/orderbook', methods=['GET'])
def get_orderbook():
    return jsonify(order_book.get_order_book())

@app.route('/simulate', methods=['GET'])
def simulate_trading():
    price = float(request.args.get('price', 100))
    n = int(request.args.get('n', 500))
    days = int(request.args.get('days', 30))
    sims = monte_carlo_strategy(price, n_simulations=n, days=days)
    final_prices = [s[-1] for s in sims]
    summary = {
        "mean_final_price": float(np.mean(final_prices)),
        "median_final_price": float(np.median(final_prices)),
        "5pct": float(np.percentile(final_prices, 5)),
        "95pct": float(np.percentile(final_prices, 95))
    }
    sample_paths = sims[:5]
    return jsonify({"summary": summary, "sample_paths": sample_paths})

@app.route('/sentiment', methods=['POST'])
def sentiment_analysis():
    data = request.get_json() or {}
    text = data.get('text', '')
    if not text:
        return jsonify({"error": "text is required"}), 400
    # Dummy — replace with real OpenAI/Gemini call later
    score = random.uniform(-1, 1)
    return jsonify({"text": text, "sentiment_score": float(score)})

@app.route('/portfolio', methods=['POST'])
def portfolio_optimization():
    data = request.get_json() or {}
    portfolio = data.get('portfolio')
    if not isinstance(portfolio, dict):
        return jsonify({"error": "portfolio must be a JSON object like {\"AAPL\":50, \"TSLA\":30}"}), 400

    adjusted = {k: float(v) * random.uniform(0.9, 1.1) for k, v in portfolio.items()}
    total = sum(adjusted.values()) if adjusted else 1.0
    weights = {k: adjusted[k] / total for k in adjusted}
    return jsonify({"original": portfolio, "adjusted": adjusted, "weights": weights})

if __name__ == '__main__':
    app.run(debug=True)
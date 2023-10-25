from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def listpage():
    return render_template("list.html")

@app.route("/1")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()

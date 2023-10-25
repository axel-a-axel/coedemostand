from flask import Flask, render_template, request, send_file
import json
app = Flask(__name__)


@app.errorhandler(404)
def page_not_found(*args):
  return "Well, you got one more issue to deal with", 404


@app.route("/submit", methods=["POST"])
def post():
  data = request.get_data(as_text=True)
  data = f"Its so nice from your side to send me {data}"
  return data #json.dumps({"message": data})


@app.route("/getimage", methods=["GET"])
def get_image():
  # get path to the image
  image_path = "static/my_awesome_cat.jpg"

  return send_file(image_path, mimetype="image/jpeg")

@app.route("/")
def listpage():
    return render_template("list.html")

@app.route("/1")
def index():
    return render_template("index.html")

@app.route("/2")
def network():
    return render_template("network.html")

if __name__ == "__main__":
    app.run()

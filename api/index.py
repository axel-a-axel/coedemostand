from flask import Flask, render_template, request, send_file, make_response
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


@app.route("/requestoverload")
def requestoverload():
    return render_template("requestoverload.html")


@app.route('/cookie')
def cookie():
    cookie_value = request.cookies.get('suspiciousCookie')
    if cookie_value is None:
        response = make_response(render_template('cookiebad.html', button=True))
        response.set_cookie('suspiciousCookie', 'incorrect value')
        return response
    elif cookie_value == 'correct value':
        return render_template('cookiebad.html', button=False)
    else:
        return render_template('cookiebad.html', button=True)

@app.route("/cats/cats/cats/dogs/cats")
def catscats():
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}


@app.route("/donotrequestthispagepls")
def donotrequest():
    return json.dumps({'failure':"I asked not to request this!"}), 418, {'ContentType':'application/json'}


@app.route("/requestsuccess", methods=["POST"])
def requestsuccess():
    return json.dumps({'success':"Good! TBD replaced with sth valid"}), 201, {'ContentType':'application/json'}




if __name__ == "__main__":
    app.run()

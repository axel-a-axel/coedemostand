from flask import Flask, render_template, request, send_file, make_response, jsonify
import json
from datetime import datetime



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

@app.route("/list")
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
    if request.is_json:
        data = request.get_json()
        if 'username' in data:
            username = data['username']
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            response = jsonify({'message': f'{username} passed RequestOverload task at {timestamp}'})
            response.status_code = 201
            return response
        else:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            response = jsonify({'message': f'Anonymous passed RequestOverload task at {timestamp}'})
            response.status_code = 201
            return response
    else:
        response = jsonify({'message': 'Check the cookies, m8'})
        response.status_code = 400
        return response






'''

commented since vercel fails to add cryptography
not actual in current implementation, yet will be used for future hw logic

@app.route("/demoresponse", methods=["GET", "POST"])
def send_response():
    if request.method == "GET":
        return render_template("demoresp.html", message='')
    elif request.method == "POST":
        name = request.form['name']
    
        # Add timestamp to the received string
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        message = f'{name} ({timestamp})'

        # Encrypt the message using cryptography library
        key = Fernet.generate_key()
        f = Fernet(key)
        encrypted_message = f.encrypt(message.encode()).decode()

        return render_template('demoresp.html', message=encrypted_message)'''


@app.route("/")
def landing():
    cookie_value = request.cookies.get('username')
    if cookie_value is None:
        response = make_response(render_template('landing.html', showform=True))
        return response

    return render_template("landing.html")



if __name__ == "__main__":
    app.run()

from flask import Flask, jsonify, flash, request
import pymysql
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
import logging
from Prediction import loadModel, getPredictionFor

mysql = MySQL()

def addCorsHeaders(response):
    response.headers.add({"Access-Control-Allow-Origin": "http://127.0.0.1:3000"})
    response.headers.add({'Access-Control-Allow-Headers': "http://127.0.0.1:3000"})
    response.headers.add({'Access-Control-Allow-Methods': "http://127.0.0.1:3000"})


def error_response(error=None):
    message = {
        'status': 404,
        'message': error if error else "Something went wrong, Please try again later",
    }
    response = jsonify(message)
    response.status_code = 404
    # addCorsHeaders(response)
    return response

def success_response(message,data=None):
    message = {
        'status': 200,
        'message': message,
    }
    if(data!=None):
        message['data']=data

    response = jsonify(message)
    response.status_code = 200
    # addCorsHeaders(response)
    return response

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
cors = CORS(app, resources={r"/api/*": {
    "origins": "http://127.0.0.1:3000", 
    "Access-Control-Allow-Origin": "http://127.0.0.1:3000", 
    'Access-Control-Allow-Headers': "http://127.0.0.1:3000", 
    'Access-Control-Allow-Methods': "http://127.0.0.1:3000"
    }})

app.config['MYSQL_DATABASE_USER'] = 'root_1'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root_1'
app.config['MYSQL_DATABASE_DB'] = 'word_predictor_schema'
app.config['MYSQL_DATABASE_HOST'] = 'db_service'
mysql.init_app(app)



model, tokenizer = loadModel()

@app.route('/')
def hello_world():
    return 'Started Capston project'

@app.route('/api/v1/save_user_selection', methods=['POST'])
def save_user_selection():

    user_input = request.form.get('user_input')
    predicted_word = request.form.get('predicted_word')    
    if request.method == 'POST' and user_input and predicted_word:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        try:  
            sqlQuery = "INSERT INTO user_prediction_selection(user_input, user_selected_word) VALUES(%s, %s)"
            bindData = (user_input, predicted_word)            
            cursor.execute(sqlQuery, bindData)

            #return last added record    
            lastId = cursor.lastrowid
            cursor.execute("SELECT * FROM user_prediction_selection WHERE id =%s", lastId)
            inserted_record = cursor.fetchone()

            conn.commit()

            return success_response(message='User selection saved successfully', data = inserted_record)
        except Exception as e:
            print(e)
            return error_response(str(e))    
        finally:
            cursor.close() 
            conn.close()

    else:
        return error_response('Enter valid parameters') 



@app.route('/api/v1/get_prediction', methods=['GET'])
def get_prediction():
    user_input = request.args.get('user_input')
    print(user_input)
    if user_input:

        #For example we are getting following prediction from model
        predicted_words = getPredictionFor(user_input, model, tokenizer)

        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)

        try:  
            sqlQuery = "INSERT INTO prediction_history(user_input, prediction_output) VALUES(%s, %s)"
            bindData = (user_input, predicted_words)            
            cursor.execute(sqlQuery, bindData)

            #return last added record    
            lastId = cursor.lastrowid
            cursor.execute("SELECT * FROM prediction_history WHERE id =%s", lastId)
            inserted_record = cursor.fetchone()

            conn.commit()

            return success_response(message='Saved predicted word for given input', data = inserted_record)
        except Exception as e:
            print(e)
            return error_response(str(e))    
        finally:
            cursor.close() 
            conn.close()

    else:
        return error_response('Enter valid parameters') 
        
app.run(debug=True)
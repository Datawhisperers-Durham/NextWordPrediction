import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request

def error_response(error=None):
    message = {
        'status': 404,
        'message': error if error else "Something went wrong, Please try again later",
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone

def success_response(message,data=None):
    message = {
        'status': 200,
        'message': message,
    }
    if(data!=None):
        message['data']=data

    respone = jsonify(message)
    respone.status_code = 200
    return respone


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
            respone = jsonify('error')
            respone.status_code = 200
            return error_response(str(e))    
        finally:
            cursor.close() 
            conn.close()

    else:
        return error_response('Enter valid parameters') 


@app.route('/api/v1/get_prediction')
def get_prediction():

    user_input = request.args.get('user_input')
    print(user_input)
    if user_input:

        #For example we are getting following prediction from model
        predicted_words = ["Eve", "Alice", "Bob"]

        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)

        try:  
            sqlQuery = "INSERT INTO prediction_history(user_input, prediction_output) VALUES(%s, %s)"
            bindData = (user_input, ','.join(predicted_words))            
            cursor.execute(sqlQuery, bindData)

            #return last added record    
            lastId = cursor.lastrowid
            cursor.execute("SELECT * FROM prediction_history WHERE id =%s", lastId)
            inserted_record = cursor.fetchone()

            conn.commit()

            return success_response(message='Saved predicted word for given input', data = inserted_record)
        except Exception as e:
            print(e)
            respone = jsonify('error')
            respone.status_code = 200
            return error_response(str(e))    
        finally:
            cursor.close() 
            conn.close()

    else:
        return error_response('Enter valid parameters') 
        
if __name__ == '__main__':
    app.run(host= '0.0.0.0', debug=True)
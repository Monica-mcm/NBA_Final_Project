# Load libraries
from flask import Flask, render_template, request, redirect, url_for
import pandas as pd
import tensorflow as tf
import keras
from keras.models import load_model
import os

# instantiate flask 
app = Flask(__name__)


# we need to redefine our metric function in order 
# to use it when loading the model 
def auc(y_true, y_pred):
    auc = tf.metrics.auc(y_true, y_pred)[1]
    keras.backend.get_session().run(tf.local_variables_initializer())
    return auc

# load the model, and pass in the custom metric function
#global graph
#graph = tf.get_default_graph()
model = load_model('ML_Process/NBA2.h5')

# define a predict function as an endpoint 

@app.route('/')
def home():
    return render_template('NBATemplate.html')

@app.route("/predict", methods=["GET","POST"])
def predict():
    data = {"success": False}
    params = flask.request.json
    if (params == None):
       params = flask.request.args
    #if parameters are found, retun a prediction
    if (params != None):
       x=pd.DataFrame.from_dict(params, orient='index').transpose()
       with graph.as_default():
         data["prediction"] = str(model.predict(x)[0][0])
         data["success"] = True
    #return a response in json fomat 
    return flask.jsonify(data)    
    #start the flask app, allow remote connections 
#app.run(host='0.0.0.0')


@app.route('/performance')
def performance():
    return render_template('performance.html')

@app.route('/efficiency')
def efficiency():
    return render_template('efficiency.html')


if __name__ == "__main__":
    app.run(debug=True)
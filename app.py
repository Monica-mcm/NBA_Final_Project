# Load libraries
from flask import Flask, render_template, request, redirect, url_for, jsonify
import pandas as pd
import numpy as np
import tensorflow as tf
import keras
from keras.models import load_model
import sys

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

@app.route('/predict', methods=['POST', 'GET'])
def predict():
    int_features = [(x) for x in request.form.values()]
    final_features = np.array(int_features)
    prediction = model.predict(final_features)
    output = round(prediction[0], 2)
    return render_template('machinelearning.html', prediction_text=output)

@app.route('/performance')
def performance():
    return render_template('performance.html')

@app.route('/efficiency')
def efficiency():
    return render_template('efficiency.html')

if __name__ == "__main__":
    app.run(debug=True)
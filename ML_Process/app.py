import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)
model = pickle.load(open('finalized_model_2.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('homepage.html')

@app.route('/predict',methods=['POST'])
def predict():

    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    #prediction = model.predict(final_features)

    #output = round(prediction[0], 2)

    return render_template('machinelearning.html', prediction_text='The player will be {} MVP'.format(output))

@app.route('/plots')
def plots():

    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)

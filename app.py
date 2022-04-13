import numpy as np
import pandas as pd
from flask import Flask, request, render_template
from sklearn import preprocessing
import pickle

app = Flask(__name__)
model = pickle.load(open('wine_model.pkl', 'rb'))


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    feature_list = request.form.to_dict()
    final_features = list(feature_list.values())

    prediction = model.predict(np.array([final_features]))

    return render_template('prediction.html', prediction_text='Residual sugar in this bottle of wine is {}'.format(prediction[0]))


if __name__ == "__main__":
    app.run(debug=True)


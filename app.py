from flask import Flask, request, render_template
import numpy as np
import lightgbm as lgb
from create_df import acquisition, columns

app = Flask(__name__)

model = lgb.Booster(model_file='air_mode.txt')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    feature_list = request.form.to_dict()

    pred_period = model.predict(acquisition(
        columns,
        1,
        2254,
        feature_list['airline'],
        7,
        feature_list['origin'],
        feature_list['dest']
    ))

    return render_template('prediction.html', prediction_text='Your flight have {}% chance to be delayed'.format(
        round(pred_period[0]*100, 2)
    ))


if __name__ == "__main__":
    app.run(debug=True)


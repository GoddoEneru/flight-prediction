from flask import Flask, request, render_template
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

    return render_template('prediction.html', prediction_text='Your flight have {}% chance to be delayed'.format(
        model.predict(acquisition(
            columns,
            1,
            2354,
            feature_list['airline'],
            7,
            feature_list['origin'],
            feature_list['dest']
        ))
    ))


if __name__ == "__main__":
    app.run(debug=True)


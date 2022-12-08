from tensorflow.keras.models import load_model
import pickle
import numpy as np

def loadModel():
    model = load_model('PredictorAPI/model/next_words.h5')
    tokenizer = pickle.load(open('PredictorAPI/model/token.pkl', 'rb'))
    return model, tokenizer

def next_word_predictor(model, tokenizer, text):
    sequence = tokenizer.texts_to_sequences([text])
    sequence = np.array(sequence)
    preds = np.argmax(model.predict(sequence))
    predicted_word = ""
  
    for key, value in tokenizer.word_index.items():
        if value == preds:
            predicted_word = key
            break
    return predicted_word

def getPredictionFor(value, model, tokenizer):
    count = 1
    predictedWord = ""
    while count > 0:
        predictedWord += next_word_predictor(model, tokenizer, value)
        # predictedWord += ","
        count -= 1
    return predictedWord


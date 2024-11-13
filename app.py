from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/recommendations.html')
def recommendations():
    return render_template('recommendations.html')

@app.route('/books.html')
def books():
    return render_template('books.html')

# if __name__ == '__main__':
#     app.run(debug=True)

if __name__ == '__main__':
    freezer.freeze()
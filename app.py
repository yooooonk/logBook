
from flask import Flask, render_template, jsonify

app = Flask(__name__)

# HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('login.html')

# API 역할을 하는 부분
##login
@app.route('/api/login', methods=['POST'])
def login():
    return render_template('login.html')

##join
@app.route('/api/signup', methods=['POST'])
def signup():
    return render_template('login.html')

## comment
@app.route('/api/comment', methods=['GET'])
def get_comment():
    return render_template('login.html')

@app.route('/api/comment', methods=['POST'])
def create_comment():
    return render_template('login.html')


## ToDolist
@app.route('/api/todolist', methods=['GET'])
def get_todolist():
    return render_template('login.html')

@app.route('/api/todolist', methods=['POST'])
def create_todolist():
    return render_template('login.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
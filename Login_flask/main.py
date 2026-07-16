from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3

app = Flask(__name__)
app.secret_key = 'your_secret_key'  

# Database setup
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, password TEXT)''')
    conn.commit()
    conn.close()

# Routes
@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()
    conn.close()
    
    if user:
        return redirect(url_for('welcome'))
    else:
        flash('Invalid username or password.')
        return redirect(url_for('index'))

@app.route('/register')
def signup():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def signup_user():
    username = request.form['username']
    password = request.form['password']
    
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    existing_user = cursor.fetchone()
    
    if existing_user:
        flash('User already exists.')
        return redirect(url_for('register'))
    else:
        cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
        conn.commit()
        conn.close()
        return redirect(url_for('index'))

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/success')
def success():
    return render_template('success.html')

if __name__ == '__main__':
    init_db()  
    app.run(debug=True)

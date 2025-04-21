from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Replace this with your actual remote database URL
# Example for PostgreSQL: 'postgresql://username:password@hostname:port/dbname' or 'postgresql://yourusername:yourpassword@yourhost:5432/yourdbname'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://neondb_owner:npg_8s7rcZmHTieh@ep-sweet-paper-a1qtmdjx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define a sample table
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

@app.route('/')
def home():
    return 'Flask app is running!'

@app.route('/create-db')
def create_db():
    db.create_all()
    return 'Database tables created!'

if __name__ == '__main__':
    app.run(debug=True)

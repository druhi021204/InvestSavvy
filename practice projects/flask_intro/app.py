from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
#from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime

app=Flask(__name__)
app.config['SQLAlchemy_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.string(200), nullable=False)
    completed = db.Column(db.Integer, default=0)
    data_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' %self.id

@app.route('/')

def index():
    return render_template('index.html')
    #return "hi"

if __name__ == "__main__":
    app.run(debug=True)


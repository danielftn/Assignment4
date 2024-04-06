from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

products = [
 {
 "id": 1,
 "name": "Product 1",
 "description": "Description for Product 1",
 "price": 10.99,
 "image": 'images/product1.png'
 },
 {
 "id": 2,
 "name": "Product 2",
 "description": "Description for Product 2",
 "price": 20.99,
 "image": 'images/product2.jpg'
 },
 {
 "id": 3,
 "name": "Product 3",
 "description": "Description for Product 3",
 "price": 10.99,
 "image": 'images/product3.jpg'
 },
 {
 "id": 4,
 "name": "Product 4",
 "description": "Description for Product 4",
 "price": 10.99,
 "image": 'images/product4.jpg'
 },
 {
 "id": 5,
 "name": "Product 5",
 "description": "Description for Product 5",
 "price": 10.99,
 "image": 'images/product5.jpg'
 },
 {
 "id": 6,
 "name": "Product 6",
 "description": "Description for Product 6",
 "price": 10.99,
 "image": 'images/product6.jpg'
 },
 {
 "id": 7,
 "name": "Product 7",
 "description": "Description for Product 7",
 "price": 10.99,
 "image": 'images/product7.jpg'
 },
 {
 "id": 8,
 "name": "Product 8",
 "description": "Description for Product 8",
 "price": 10.99,
 "image": 'images/product8.jpg'
 },
 {
 "id": 9,
 "name": "Product 9",
 "description": "Description for Product 9",
 "price": 10.99,
 "image": 'images/product9.jpg'
 },
 {
 "id": 10,
 "name": "Product 10",
 "description": "Description for Product 10",
 "price": 10.99,
 "image": 'images/product10.jpg'
 }
]


with open('users.json', 'r') as f:
   users = json.load(f)

@app.route('/LoginPage', methods=['POST'])
def authenticateUser():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    for user in users:
        if(user['username'] == username and user['password'] == password):
            return jsonify({'loggedIn' : True, 'message': 'Login successful'})
    return jsonify({'loggedIn' : False, 'message': 'Invalid username and password'})
    
@app.route('/Signup', methods=['POST'])
def signUp():
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data or 'email' not in data:
        return jsonify({'signUp': False, 'message': 'Invalid request format'})

    username = data['username']
    password = data['password']
    email = data['email']

    for user in users:
        if user['username'] == username:
            return jsonify({'signUp': False, 'message': 'User already exists'})

    new_user = {'id': len(users) + 1, 'username': username, 'password': password, 'email': email}
    users.append(new_user)

    with open('users.json', 'w') as f:
        json.dump(users, f)

    return jsonify({'signUp': True, 'message': 'New user created'})

    
@app.route('/ProductPage', methods=['GET'])
def getProducts():
    return jsonify(products)


if __name__ == '__main__':
    app.run(debug=True)
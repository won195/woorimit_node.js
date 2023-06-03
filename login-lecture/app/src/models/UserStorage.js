'use strict';

const db = require('../config/db');

const fs = require("fs").promises;
class UserStorage {
  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword,name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    
    return userInfo;
  }

  static #getUsers(data, isALL, fields){
    const users = JSON.parse(data);
    if (isALL) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isALL, ...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE id = ?', [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });  
    });
  }

  static async save(userInfo){}
}


module.exports = UserStorage;
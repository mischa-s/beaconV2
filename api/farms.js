// const bcrypt = require('bcryptjs') //for auth and password hash
const express = require('express')
const route = express.Router()

module.exports = function (db) {
  route.get('/farms', farms) // gets all the farms

  function farms (req, res, next) {
    db.findAll('farms')
      .then((farms) => {
        res.json(farms)
      })
  }

  return route
}

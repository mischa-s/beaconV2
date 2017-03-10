// const bcrypt = require('bcryptjs') //for auth and password hash
const express = require('express')
const route = express.Router()

module.exports = function (db) {
  route.get('/farms', farms) // gets all the farms
  route.post('/createfarm', createFarm) // create a new farm

  function farms (req, res, next) {
    db.findAll('farms')
      .then((farms) => {
        res.json(farms)
      })
  }

  function createFarm (req, res, next) {
      db.createFarm('farms', req.body)
        .then((farms) => {
          res.json(farms)
        })
      .catch(next)
  }
  return route
}

// const bcrypt = require('bcryptjs') //for auth and password hash
const express = require('express')
const route = express.Router()

module.exports = function (db) {
  route.get('/farms', farms) // gets all the farms
  route.get('/farms/:id', getFarm) // gets a specific farm

  function farms (req, res, next) {
    db.findAll('farms')
      .then((farms) => {
        res.json(farms)
      })
  }

  function getFarm (req, res, next) {
    const id = 1
    db.getFarmByID('farms', id)
      .then((farm) => {
        res.json(farm)
      })
  }

  return route
}

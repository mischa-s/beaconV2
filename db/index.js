module.exports = function (knex) {
  return {
    findAll: function (table) {
      return knex(table).select()
    },

    getFarmByID: function (table, id) {
      return knex('farms')
        .select()
        .where('id', id)
    }
  }
}

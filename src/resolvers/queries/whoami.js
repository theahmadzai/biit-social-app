const { authenticated } = require('../../auth')

module.exports = authenticated(async (_, __, { db, user }) => {
  return await db.models.User.findOne({
    where: { username: user.id },
  })
})

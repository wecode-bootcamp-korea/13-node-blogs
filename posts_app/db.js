const faker = require('faker')
faker.locale = 'ko'

const db = ((LENGTH = 15) => {
  return {
    posts: new Array(LENGTH).fill().map((_, index) => ({
      id: index + 1,
      username: faker.name.firstName(),
      title: faker.lorem.word(),
      description: faker.lorem.words(),
    })),
  }
})()

module.exports = db

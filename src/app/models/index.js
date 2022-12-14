import User from './user.js'


const associationDefiner = () => {
    // Author x Book: One to Many
    // Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' })
    // Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })
}

export default associationDefiner
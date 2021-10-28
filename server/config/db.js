const mongoose = require('mongoose');


const configDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('> MongoDB connected')
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = configDb
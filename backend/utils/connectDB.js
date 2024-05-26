const Mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await Mongoose.connect("mongodb+srv://bookstore:bookstore1234@cluster0.gauaowg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = connectDB;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');


require('dotenv').config();

mongoose.set("strictQuery", false); //обновления по документации

const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I am listenning on PORT ${PORT}`)
})


//user nadinshy z6xI7Tfgpg8cpUdP

//mongodb+srv://nadinshy:<password>@cluster0.wivdmnz.mongodb.net/?retryWrites=true&w=majority
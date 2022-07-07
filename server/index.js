import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import apiRoutes from './routes/api.js';

// import buyFurn from './routes/BuyFurn.js'

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.use('/api', apiRoutes);


app.use(bodyParser.json({limit:"20mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:"true"}));

// app.use((cors()));

app.get('/', (req, res) => res.status(200).send("Hello World"));
const CONNECT_URL = 'mongodb+srv://pizza:pizza@cluster0.x2a3v63.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection Established on port: ${PORT}`)
)).catch((err) => console.log(err.message));

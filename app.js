require('dotenv').config()
const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

var corsOptions = {
    origin: true, credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

const img = require('./routes/img')
app.use('/img', img)

const auth = require('./routes/auth')
app.use('/auth', auth)



const eo = require('./routes/eo')
app.use('/eo', eo)

const work = require('./routes/work')
app.use('/work', work)

const print = require('./routes/print')
app.use('/print', print)

const barang = require('./routes/barang')
app.use('/barang', barang)

const satulayar = require('./routes/satulayar')
app.use('/satulayar', satulayar)



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = 7001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
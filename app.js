const express = require('express');
const parser = require('body-parser');
const offerRoutes = require('./routes/offerRoutes');
const cabRoutes = require('./routes/cabRoutes');
const accountRoutes = require('./routes/accountsRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRoutes');
const path = require('path');
const cookieSession = require('cookie-session');
const { engine } = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/", parser.urlencoded({ extended: true }));

app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);

app.use(accountRoutes);
app.use(offerRoutes);
app.use(cabRoutes);
app.use(bookingRoutes);
app.use(adminRoutes);



function handler(req, res) {
    res.send("Hello World")
}
app.get('/test', handler)

app.listen(3000);
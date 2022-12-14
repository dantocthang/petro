import express from 'express'
import session from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url'
import methodOverride from 'method-override'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import expressLayouts from 'express-ejs-layouts'
import dotenv from 'dotenv'

import sequelize from './config/db.js'
import associationDefiner from './app/models/index.js'
import route from './routes/index.js'
import helpers from './util/helpers.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3003

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// View engines
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('layout', path.join(__dirname, '/resources/views/admin/layouts/main.ejs'))
app.set('view engine', 'ejs');

// Cấu hình session-cookie-flash
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser('keyboard cat'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 ngày
}));
app.use(flash());


// Kết nối Mysql
try {
  await sequelize.authenticate()
  associationDefiner()
  // await sequelize.sync({ force: true })
  await sequelize.sync()
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(methodOverride('_method'))

// set static folder
app.use(express.static(path.join(__dirname, './public')))

// Custom helpers
helpers(app);

app.use(function (req, res, next) {
  res.locals.user = req.session.user || req.user;
  next();
});

// Định tuyến
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
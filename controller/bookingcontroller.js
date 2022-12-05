const { where } = require('sequelize');
const cab = require('../model/cab');
const user = require('../model/user');
const place = require('../model/place');
const booking = require('../model/booking');
// const Booking = require('../model/booking');
const Place = require('../model/place');


module.exports.create = (req, res, next) => {
    place.findAll().then(places => {
        res.render('booking-form', {
            data: places
        });
    })

}

module.exports.createPost = (req, res, next) => {
    booking.create({
        bid: req.body.bid,
        pid: req.body.pid,
        uid: req.body.uid,
        date: req.body.date,
        time: req.body.time,
        paddress: req.body.paddress,
        daddress: req.body.daddress,
        pname: req.body.pname,
        contactnumber: req.body.contactnumber,
        passengersno: req.body.passengersno,

    })
        .then(user => {
            res.redirect("/cab");
        })
}







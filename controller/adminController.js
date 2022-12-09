const { where } = require('sequelize');
const cab = require('../model/cab');
const user = require('../model/user');
const booking = require('../model/booking');
const place = require('../model/place');
const Booking = require('../model/booking');

module.exports.adminhome = (req, res, next) => {

    res.render('admin-home');

}

module.exports.cabindex = (req, res, next) => {
    cab.findAll().then(cabs => {
        res.render('cab-index', {
            data: cabs
        });
    })
}

module.exports.userindex = (req, res, next) => {
    user.findAll().then(users => {
        res.render('user-index', {
            data: users
        });
    })
}

module.exports.bookingindex = (req, res, next) => {
    booking.findAll().then(bookings => {
        res.render('booking-index', {
            data: bookings
        });
    })
}

module.exports.bookingindexPost = async (req, res, next) => {
    date=req.body.date
    let bookings = await Booking.findAll({
        where:{
            date:date
        }
    })
    if(bookings.length!=0){
        res.render('booking-index',{
            data:bookings
        })
    }
    else {

        let isFound = 1

        Booking.findAll().then(bookings => {

            res.render('booking-index', {

                data: bookings,

                found: isFound

            })



        })

    }
}


module.exports.place = (req, res, next) => {
    place.findAll().then(places => {
        res.render('place-index', {
            data: places
        });
    })
}


module.exports.createplace = (req, res, next) => {
    res.render('place-create');
}

module.exports.createplacepost = (req, res, next) => {
    place.create({
            start: req.body.start,
            end: req.body.end,
            rate: req.body.rate
        })
        .then(user => {
            res.redirect("/admin/routes");
        })
}




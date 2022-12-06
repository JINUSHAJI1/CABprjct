const { where } = require('sequelize');
const cab = require('../model/cab');
const user = require('../model/user');
const place = require('../model/place');
const booking = require('../model/booking');
// const Booking = require('../model/booking');



module.exports.create = async (req, res, next) => {
    const id = req.params.id;
    const places = await place.findAll();
    const cabFromDb = await cab.findByPk(id);
    const userFromDb = await user.findByPk(req.session.userId);
    console.log(cabFromDb.dataValues);
    res.render('booking-form', {
        id: id,
        data: places,
        cab: cabFromDb,
        user: userFromDb
    });
}

module.exports.createPost = (req, res, next) => {
    console.log("hlo");

    

    booking.create({
        bid: req.body.bid,
        pid: req.body.pid,
        cid:req.body.cid,
        uid: req.session.userId,
        date: req.body.date,
        time: req.body.time,
        paddress: req.body.paddress,
        daddress: req.body.daddress,
        pname: req.body.pname,
        contactnumber: req.body.contactnumber,
        passengersno: req.body.passengersno,
    })
        .then(user => {
            res.redirect("/cab/bookview/"+user.bid);
        })
}


module.exports.bookview = (req, res, next) => {
    console.log(req.params.bid);
    
    booking.findByPk(req.params.bid)
        .then(bookings => {
            console.log(bookings);
            res.render('bookview', {
                data: bookings


            })
        });

}
module.exports.payment = (req, res, next) => {
    res.render('payment');
}
module.exports.paymentsuccess = (req, res, next) => {
    res.render('successpdf');
}
module.exports.pdf = (req, res, next) => {
    res.render('pdf');
}





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
    cab.findByPk(req.params.cabnumber).then((data) => {

        place.findOne(
            {
                where: {
                    start: req.body.start,
                    end: req.body.end
                }
            }
        ).then((paymentDetails)=>{
    booking.create({
        id: req.body.id,
        date: req.body.date,
        time:req.body.time,
        start:req.body.start,
        end:req.body.end,
        paddress: req.body.paddress,
        daddress: req.body.daddress,
        user_id: req.session.userId,
        cab_id: req.params.id,
        cabnumber: req.body.cabnumber,
        pname: req.body.pname,
        contactnumber: req.body.contactnumber,
        passengersno: req.body.passengersno,
        rate:paymentDetails.rate
    })
        .then(booking => {
            console.log();
            // res.redirect("/cab/bookview/"+booking.id);
            res.redirect("/cab/bookview/"+booking.id);
        })
})
})

}

module.exports.bookview = (req, res, next) => {
    console.log(req.params.id);
    
    booking.findByPk(req.params.id)
        .then(bookings => {
            console.log(bookings);
            res.render('bookview', {
                data: bookings


            })
        });


    

}




module.exports.payment = (req, res, next) => {
    console.log('11111111111111111111111111111')
    console.log(req.params.id)
    booking.findByPk(req.params.id)
    .then(bookings => {
        console.log(bookings);
        res.render('pdf', {
            data: bookings


        })
    });

}
module.exports.paymentsuccess = (req, res, next) => {
    booking.findByPk(req.params.id)
    .then(bookings => {
        console.log(bookings);
        res.render('successpdf', {
            data: bookings


        })
    });
}
module.exports.pdf = (req, res, next) => {
    booking.findByPk(req.params.id)
    .then(bookings => {
        console.log(bookings);
        res.render('pdf', {
            data: bookings


        })
    });
}





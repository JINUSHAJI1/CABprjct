const { where } = require('sequelize');
const cab = require('../model/cab');



module.exports.index = (req, res, next) => {
    cab.findAll().then(cabs => {
        res.render('cab-index', {
            data: cabs
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('cab-create');
}

module.exports.createPost = (req, res, next) => {
    cab.create({
        id: req.body.id,
        drivername: req.body.drivername,
        drivercontact: req.body.drivercontact,
        driveremail: req.body.driveremail,
        licencenumber: req.body.licencenumber,
        cabnumber: req.body.cabnumber,
        cabmodel: req.body.cabmodel,
        myear: req.body.myear,
        cabcapacity: req.body.cabcapacity,
        password: req.body.password,

    })
        .then(user => {
            res.redirect("/cab");
        })
}


// module.exports.updatePost = (req, res, next) => {
//     movie.findByPk(req.params.id)
//         .then(user => {
//             movie.update({
//                     name: req.body.name,
//                     releaseDate: req.body.releasedate,
//                     summary: req.body.summary,
//                     director: req.body.director
//                 }, {
//                     where: {
//                         id: req.params.id
//                     }
//                 })
//                 .then(count => {
//                     res.redirect('/');
//                 });
//         });
// }


module.exports.cabview = (req, res, next) => {
    cab.findAll().then(cabs => {
        res.render('cab-user-index', {
            data: cabs
        });
    })
}

module.exports.details = (req, res, next) => {
    cab.findByPk(req.params.id)
        .then(cabs => {
            res.render('cabdetails', {
                data: cabs


            })
        });

}


// module.exports.details = (req, res, next) => {
//     cab.findAll().then(cabs => {
//         res.render('cabdetails', {
//             data: cabs
//         });
//     })
// }




module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await cab.findByPk(id);
    if (user) {
        await cab.destroy({
            where: {
                fid: id
            }
        });
        res.redirect("/cab");
    }
}
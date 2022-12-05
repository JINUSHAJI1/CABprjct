const user = require('./user');
const cab = require('./cab');
const place = require('./place');
const booking = require('./booking');


place.hasMany(booking, {foreignKey:'pid'});
user.hasMany(booking, {foreignKey:'uid'});
cab.hasMany(booking, {foreignKey:'cid'});

// booking.belongsTo(place, {

//     foreignKey:'id'

// });

// place.hasMany(booking)
// booking.belongsTo(place, {
//     foreignKey:{name : "pid", field : "id", allowNull: true}
// });


user.sync({alter: true});
cab.sync({alter: true});
place.sync({alter: true});
booking.sync({alter: true});

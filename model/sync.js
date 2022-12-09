const user = require('./user');
const cab = require('./cab');
const place = require('./place');
const booking = require('./booking');

cab.hasMany(booking, {foreignKey:'cab_id'});
booking.belongsTo(cab,{
    foreignKey: 'cab_id'
});
 


user.hasMany(booking,{foreignKey: 'user_id'});
booking.belongsTo(user, {
    foreignKey: 'user_id'
});



user.sync({alter: true});
cab.sync({alter: true});
place.sync({alter: true});
booking.sync({alter: true});

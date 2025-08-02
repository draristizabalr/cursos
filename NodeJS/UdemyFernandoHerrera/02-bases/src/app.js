// require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserByIdArrow } = require('./js-foundation/04-arrow-functions');
// require('./js-foundation/05-factory');
// require('./js-foundation/06-promises');
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo malo');

// getUserById(1, function (error, user) {
//   if (error) throw Error(error);
//   console.log(user);
// });

// getUserByIdArrow(1, (error, user) => {
//   if (error) throw Error(error);
//   console.log(user);
// });




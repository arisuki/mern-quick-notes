require('dotenv').config();
require('./config/database');

const Note = require('./models/note');

(async function() {
await Note.deleteMany({});
const notes = await Note.create([
  {text: 'Test note'},
  {text: 'Another test'},
  {text: 'Boy golly, look at these notes!'},
]);

console.log(notes)
process.exit();
})();
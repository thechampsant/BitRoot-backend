const mongoose = require('mongoose');
const ContactSchema = require('../Database/db');

const Contacts = mongoose.model('Contacts',ContactSchema);

module.exports = Contacts;
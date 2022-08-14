const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

mongoose.connect( 'mongodb+srv://thechampsant:mynameis42@cluster0.rdzlw4p.mongodb.net/ContactsDetails',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    numbers:[{
        type:String,
        required:[true, 'number is required'],
        unique:[true, 'numbers are not unique']
    }] 
})

ContactSchema.plugin(uniqueValidator);

module.exports = ContactSchema;

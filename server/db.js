const mongoose = require('mongoose');

var URL = "mongodb+srv://suthar123:suthar123@cluster0.krxjk.mongodb.net/admission_form?retryWrites=true&w=majority";
mongoose.connect(URL ,{ useNewUrlParser: true, useUnifiedTopology: true })
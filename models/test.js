var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  text: {type: String},
  create_at: {type: Date, default: Date.now}
});

mongoose.model('Test', TestSchema);
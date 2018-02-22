const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    priority: { type: Number, required: true }
});

export default mongoose.model('Todo', schema);
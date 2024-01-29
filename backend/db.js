const { default: mongoose } = require("mongoose");
//mongodb+srv://sonali:Sonali%401234@cluster0.vhm6y6h.mongodb.net/

mongoose.connect(
  "mongodb+srv://sonali:Sonali%401234@cluster0.vhm6y6h.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};

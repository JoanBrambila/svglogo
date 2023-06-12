const inquirer = require("Inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");


class Svg{
constructor (){
this.text = ""
this.shape = ""
}
render (){
return ``
}
setText (text, color) {
this.text = ``
}
setShape (shape) {
this.shape = shape.render ()
}
}


const questions = [
{
type: "Input",
name: "text",
message: "TEXT: Enter up to (3) Characters:",
},
{
type: "Input",
name: "text-color",
message: "TEXT COLOR: Enter a color keyword:",
},
{
type: "list",
name: "shape",
message: "Choose shape:",
choices: ("Circle", "Square", "Triangle"),
},
{
    type: "Input",
    name: "shape-color",
    message: "SHAPE COLOR: Enter a color keyword:",
    },
];

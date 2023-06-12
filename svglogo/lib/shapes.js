class Shape{
    constructor(){
        this.color=""
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle {
    render(){
        return `<circle x="50%" cy="50%" r="100" height="100%" fill="${this.color}"/>`
    }
}
class Square {
    render(){
        return `<square x="50" height="100" width="100" fill="${this.color}"/>`
    }
}
class Triangle {
     render(){
        return `<Triangle x=`
     }
}

module.exports ={Circle, Square, Triangle};
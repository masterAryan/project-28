class Box {
    constructor (x,y,width,height){
     var options = {
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2,

     }
     this.x = x
     this.y = y
     this.width = width
     this.height = height
     this.body = Bodies.rectangle(x,y,width,height,options)
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position 
        rect(pos.x, pos.y, this.width, this.height);
    }
}
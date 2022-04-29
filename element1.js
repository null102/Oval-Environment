// Element 1
// F1: Circle
// B1: Move in a straight line
// B2: Constrain to surface
// B3: Change direction while touching another element
// B4: Move away from an overlapping Element
// E1: F1 + B1 + B2 + B3 + B4

// set element1
class E1 {
  constructor(x, y, r) {
    // position and radius
    this.posX = x;
    this.posY = y;
    this.radius = r;
    
    // boundary parameters
    this.boundary_centerX = width/2;
    this.boundary_centerY = height/2;
    this.boundary_radius = 200;
    
    // how element moves
    this.angle = random(360);
    this.speed = 1;
    this.rotation_speed = 1;
    this.separation_speed = 1;
  }
  
  //set beheavior1-beheavior4
  B1(){
    let dirX = cos(this.angle);
    let dirY = sin(this.angle);
    
    this.posX += dirX * this.speed;
    this.posY += dirY * this.speed;
  }
  

  B2(){
    if (dist(this.posX, this.posY, this.boundary_centerX, this.boundary_centerY) > this.boundary_radius){
    this.posX = this.boundary_centerX;
    this.posY = this.boundary_centerY;
  }
  }
  
  B3()
  {
    this.angle += this.rotation_speed;
  }
  
  B4(e)
  {   
    let d = this.distance_to(e);
     
    let dX = (this.posX - e.posX)/d;
    let dY = (this.posY - e.posY)/d;
    
    this.posX += dX * this.separation_speed;
    this.posY += dY * this.separation_speed;     
  }

  
  // getting distance and detecting overlapping
  distance_to(e){
    return dist(this.posX, this.posY, e.posX, e.posY);
  }
  

  is_overlapping(e){
    let d = this.distance_to(e);

    if (d < this.radius + e.radius) {
      return true;
    } else {
      return false;
    }
  }
}

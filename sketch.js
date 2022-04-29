// Process 10:

// Position a circle at the center of a rectangular surface.

// Set the center of the circle as the origin for a large group of Element 1.

// When an Element moves beyond the edge of its circle, return to the origin.

// Draw a line from the centers of Elements that are touching.

// Set the value of the shortest possible line to k and the longest to white, with varying grays representing values in between. 

// E1: F1 + B1 + B2 + B3 + B4


// setting variables
var elements = [];
var numElements = 114;
var size = 40;
var boundaryX, boundaryY;
var boundary_radius = 1080;

// setting up canvas and generating elements
function setup() {
  createCanvas(1920, 1080);
  circle(width/2, height/2, boundary_radius*2);
  background(255);
  angleMode(DEGREES);
  
  // generating elements
  for (let i = 0; i < numElements; i++) {
    
    let rX = width/2;
    let rY = height/2;
    
    let radius = random(size);
    
    let e = new E1(rX, rY, radius);
    
    elements.push(e);
  }
}


// checking elements and draw lines
function draw() {

  for (let i = 0; i < elements.length; i++) {
    
    let they = elements[i];
    they.B1();
    they.B2();
    
    for (let j = i + 1; j < elements.length; j++) {
      let them = elements[j];
      
      if (they.is_overlapping(them)) {
        
        they.B3();
        them.B3();
        they.B4(them);
        them.B4(they);
        
        let dis = they.distance_to(them);
        let max_dist = they.radius + them.radius;
        
        let stroke_color = map(dis, 0, max_dist, 0, 255);
        
        stroke(stroke_color, 7);
        
        line(they.posX, they.posY, them.posX, them.posY);
      }
    }
  }
  
}

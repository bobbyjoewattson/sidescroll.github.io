
function obstacle() {
  this.x = w;
  this.y = h/2;
  this.gravity = 2;
  this.velocity = 0;
  
  this.appear = function() {
    fill(color('blue'));
    rect(this.x, this.y, 50, 100);
  }
  this.improve = function() {
    this.velocity +=this.gravity; //Gravity applied when not jumping
    this.x -= this.velocity;
          this.velocity *= 0.8;
          hit = collideRectRect(this.x, this.y, 50, 100, jumper.x,jumper.y, 50, 50);
          if (hit === true) {
          noLoop();
        }
    if(this.x < -50) {
      this.x = w + 50;
      this.y = Math.floor(Math.random()*h);
      this.velocity = 0;
      this.gravity += 0.50;
      t += 1  ;
    }
  }
}
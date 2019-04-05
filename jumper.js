
 
  function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 1;// The force of gravity
        this.lift = -20;//opposing the force of gravity
        this.velocity = 0;//velocity of player
        
        this.show = function() {
           fill(color('red'));
           rect(this.x, this.y, 50, 50);
        }
        this.up = function() {
          this.velocity += this.lift;// jumping function
        }
        this.update = function() {
          this. velocity +=this.gravity; //Gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.8;
          if (this.y > h - 50) {// rules jumper hits the floor
            this.y = h - 50;
            this.velocity = 0;
          }
          if (this.y < 0) {//jumper hits the ceiling
            this.y = 0;
            this.velocity = 0;
          }
          //down
          if(keyIsDown(16)) {
            this.gravity += 10  ;
          }
          else {
            this.gravity = 1;
          }
          //up
          if(keyIsDown(87)) {
            this.lift -= 10;
            
          }
          else {
            this.lift = -20;
          }
        }
      }//object ends here

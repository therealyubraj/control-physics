class Box {
  constructor(x, y, w, h) {
    this.pos = new Vector2D(x, y);
    this.vel = Vector2D.zero();
    this.acc = Vector2D.zero();

    this.w = w;
    this.h = h;
  }

  update(draw = false) {
    // friction update
    const reverseAcc = Vector2D.reverse(this.acc);
    const scaledReverseAcc = Vector2D.scale(reverseAcc, 0.1);
    const fric = scaledReverseAcc;
    this.acc = Vector2D.add(this.acc, fric);

    if(this.acc.magSq() < 0.001){
      this.vel = Vector2D.zero();
      this.acc = Vector2D.zero();
    }

    // normal udpate
    this.vel = Vector2D.add(this.vel, this.acc);
    this.vel = Vector2D.clamp(this.vel, 30);

    this.pos = Vector2D.add(this.pos, this.vel);

    if (draw) {
      fric.draw(this.pos, color(255, 0, 0), 20);
      this.drawMovement();
    }
  }

  resetMovement() {
    this.acc = Vector2D.zero();
    this.vel = Vector2D.zero();
  }

  drawMovement() {
    this.acc.draw(this.pos, color(0, 255, 0), 40);
    this.vel.draw(this.pos, color(0, 255, 255), 60);
  }

  draw() {
    fill(255);
    stroke(255);
    strokeWeight(1);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  move(dir) {
    const scaledDir = Vector2D.scale(dir, 1);
    this.acc = Vector2D.add(this.acc, scaledDir);
    this.acc = Vector2D.clamp(this.acc, 1);
  }
}

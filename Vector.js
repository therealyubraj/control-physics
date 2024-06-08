class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  magSq() {
    return this.x ** 2 + this.y ** 2;
  }

  mag() {
    return Math.sqrt(this.magSq());
  }

  toString() {
    return JSON.stringify(this);
  }

  draw(origin, col, scale = 1) {
    strokeWeight(4);
    stroke(col);
    const scaled = Vector2D.scale(this, scale);
    line(origin.x, origin.y, origin.x + scaled.x, origin.y + scaled.y);
  }

  static zero() {
    return new Vector2D(0, 0);
  }

  static reverse(vec) {
    return new Vector2D(vec.x * -1, vec.y * -1);
  }

  static add(vec1, vec2) {
    return new Vector2D(vec1.x + vec2.x, vec1.y + vec2.y);
  }

  static sub(vec1, vec2) {
    return Vector2D.add(vec1, Vector2D.reverse(vec2));
  }

  static mult(vec1, vec2) {
    return new Vector2D(vec1.x * vec2.x, vec1.y * vec2.y);
  }

  static unit(vec) {
    const mag = vec.mag();
    if (mag === 0) {
      return Vector2D.zero();
    }
    return new Vector2D(vec.x / mag, vec.y / mag);
  }

  static scale(vec, f) {
    const unitVec = Vector2D.unit(vec);
    return new Vector2D(unitVec.x * f, unitVec.y * f);
  }

  static clamp(vec, mag) {
    if (vec.mag() >= mag) {
      return Vector2D.scale(vec, mag);
    }

    return vec;
  }
}

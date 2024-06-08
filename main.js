const b = new Box(100, 100, 20, 20);

const controls = {
  w: new Vector2D(0, -1),
  s: new Vector2D(0, 1),
  a: new Vector2D(-1, 0),
  d: new Vector2D(1, 0),
};

const pressedKeysMap = {};

function setup() {
  frameRate(30);
  createCanvas(2000, 2000);
}

function draw() {
  background(0);

  let moveVec = Vector2D.zero();
  const pressedKeys = Object.keys(pressedKeysMap);
  for (const key of pressedKeys) {
    moveVec = Vector2D.add(moveVec, controls[key] || Vector2D.zero());
  }

  b.move(moveVec);
  b.draw();
  b.update(draw);
}

function keyPressed() {
  pressedKeysMap[key.toLowerCase()] = true;
}

function keyReleased() {
  delete pressedKeysMap[key.toLowerCase()];
}

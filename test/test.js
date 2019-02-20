const {range} = require("../range.common");

test("range(10)", () => {
    expect(range(10).toString()).toBe("0,1,2,3,4,5,6,7,8,9");
});

test("range(0)", () => {
  expect(range(0).toString()).toBe("");
});

test("range(-10)", () => {
  expect(range(-10).toString()).toBe("0,-1,-2,-3,-4,-5,-6,-7,-8,-9");
});

test("range(5, 15)", () => {
  expect(range(5, 15).toString()).toBe("5,6,7,8,9,10,11,12,13,14");
});

test("range(-15, -5)", () => {
  expect(range(-15, -5).toString()).toBe("-15,-14,-13,-12,-11,-10,-9,-8,-7,-6");
});

test("range(-5, 5)", () => {
  expect(range(-5, 5).toString()).toBe("-5,-4,-3,-2,-1,0,1,2,3,4");
});

test("range(0, 50, 5)", () => {
  expect(range(0, 50, 5).toString()).toBe("0,5,10,15,20,25,30,35,40,45");
});

test("range(0, -50, -5)", () => {
  expect(range(0, -50, -5).toString()).toBe("0,-5,-10,-15,-20,-25,-30,-35,-40,-45");
});

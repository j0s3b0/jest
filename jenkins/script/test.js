const login = require('../src/index');

test("The registered student must be registered", () => {
  expect(login("jesus")).toBeTruthy();
  //toBeTruthy
});

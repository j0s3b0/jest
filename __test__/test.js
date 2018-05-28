const login = require('../index');

test("The registered student must be registered", () => {
  expect(login("jose")).toBeTruthy();
  //toBeTruthy
});

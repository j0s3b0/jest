const login = require('../index');

test("The registered student must be registered", () => {
  expect(login("ss")).toBeTruthy();
  //toBeTruthy
});

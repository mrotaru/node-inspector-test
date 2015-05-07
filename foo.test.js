var assert = require("assert")
describe("should break", function(){
  it("it doesn't", function(){
    console.log("foo");
    assert.equal(1,1);
  });
});

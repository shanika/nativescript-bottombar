var NativescriptBottombar = require("nativescript-nativescript-bottombar").NativescriptBottombar;
var nativescriptBottombar = new NativescriptBottombar();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(nativescriptBottombar.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(nativescriptBottombar.functionname()).toEqual(jasmine.any(Promise));
  });
});
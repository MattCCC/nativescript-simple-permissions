var SimplePermissions = require("nativescript-simple-permissions").SimplePermissions;
var simplePermissions = new SimplePermissions();

describe("greet function", function() {
    it("exists", function() {
        expect(simplePermissions.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(simplePermissions.greet()).toEqual("Hello, NS");
    });
});
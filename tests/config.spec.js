describe("Configuration setup", function(){
	it("should load local configuration", function(next){
		var config = require("../config")();
		expect(config.mode).toBe('local');
		next();
	});
	it("should load staging configuration", function(next){
		var config = require("../config")("staging");
		expect(config.mode).toBe("staging");
		next();
	});
	it("should load production configuration", function(next){
		var config = require("../config")("production");
		expect(config.mode).toBe("production");
		next();
	});
});
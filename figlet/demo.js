var Figlet = require("./figlet-node").Figlet;

var puts = require("sys").puts;
Figlet.write("Ameex chennai", "acrobatic", function(str) {
	puts(str);
});


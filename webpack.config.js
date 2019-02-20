const path = require("path");

module.exports = {
	mode: "production",
	entry: "./range.js",
	output: {
		path: path.resolve(__dirname, "./"),
		filename: "./range.common.js",
		library: "range",
		libraryTarget: "commonjs2"
	}
};

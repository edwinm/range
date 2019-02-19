const path = require("path");

module.exports = {
	mode: "development",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "commonjs"),
		filename: "./range.js",
		library: "range",
		libraryTarget: "commonjs2"
	}
};

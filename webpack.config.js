const path = require("path");

module.exports = {
	mode: "development",
	entry: "./moduletest/range.module-src.js",
	output: {
		path: path.resolve(__dirname, "./"),
		filename: "./moduletest/range.module-out.js",
	}
};

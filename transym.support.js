"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "transym",
              			"path": "transym/transym.js",
              			"file": "transym.js",
              			"module": "transym",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/transym.git",
              			"test": "transym-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transfer all symbols.
              	@end-module-documentation
              
              	@include:
              		{
              			"coprop": "coprop",
              			"falzy": "falzy",
              			"kein": "kein",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var coprop = require("coprop");
var falzy = require("falzy");
var kein = require("kein");
var wichevr = require("wichevr");

var transym = function transym(source, target, disregard) {
	/*;
                                                           	@meta-configuration:
                                                           		{
                                                           			"source:required": [
                                                           				"function",
                                                           				"object"
                                                           			],
                                                           			"target:required": [
                                                           				"function",
                                                           				"object"
                                                           			],
                                                           			"disregard": "boolean"
                                                           		}
                                                           	@end-meta-configuration
                                                           */

	if (falzy(source)) {
		throw new Error("invalid source");
	}

	if (falzy(target)) {
		throw new Error("invalid target");
	}

	disregard = wichevr(disregard, false);

	(0, _getOwnPropertySymbols2.default)(source).
	forEach(function onEachSymbol(symbol) {
		if (!disregard) {
			coprop(symbol, source, target);

		} else if (!kein(symbol, target)) {
			coprop(symbol, source, target);
		}
	});

	return target;
};

module.exports = transym;

//# sourceMappingURL=transym.support.js.map
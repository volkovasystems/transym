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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zeW0uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjb3Byb3AiLCJyZXF1aXJlIiwiZmFsenkiLCJrZWluIiwid2ljaGV2ciIsInRyYW5zeW0iLCJzb3VyY2UiLCJ0YXJnZXQiLCJkaXNyZWdhcmQiLCJFcnJvciIsImZvckVhY2giLCJvbkVhY2hTeW1ib2wiLCJzeW1ib2wiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksVUFBVSxTQUFTQSxPQUFULENBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQzVEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlOLE1BQU9JLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVAsTUFBT0ssTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFFBQU0sSUFBSUUsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFREQsYUFBWUosUUFBU0ksU0FBVCxFQUFvQixLQUFwQixDQUFaOztBQUVBLHNDQUE4QkYsTUFBOUI7QUFDRUksUUFERixDQUNXLFNBQVNDLFlBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBQ3hDLE1BQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNmUixVQUFRWSxNQUFSLEVBQWdCTixNQUFoQixFQUF3QkMsTUFBeEI7O0FBRUEsR0FIRCxNQUdNLElBQUksQ0FBQ0osS0FBTVMsTUFBTixFQUFjTCxNQUFkLENBQUwsRUFBNkI7QUFDbENQLFVBQVFZLE1BQVIsRUFBZ0JOLE1BQWhCLEVBQXdCQyxNQUF4QjtBQUNBO0FBQ0QsRUFSRjs7QUFVQSxRQUFPQSxNQUFQO0FBQ0EsQ0F0Q0Q7O0FBd0NBTSxPQUFPQyxPQUFQLEdBQWlCVCxPQUFqQiIsImZpbGUiOiJ0cmFuc3ltLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJhbnN5bVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ0cmFuc3ltL3RyYW5zeW0uanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidHJhbnN5bS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRyYW5zeW1cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RyYW5zeW0uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInRyYW5zeW0tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRUcmFuc2ZlciBhbGwgc3ltYm9scy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNvcHJvcFwiOiBcImNvcHJvcFwiLFxyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxyXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGNvcHJvcCA9IHJlcXVpcmUoIFwiY29wcm9wXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XHJcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xyXG5cclxuY29uc3QgdHJhbnN5bSA9IGZ1bmN0aW9uIHRyYW5zeW0oIHNvdXJjZSwgdGFyZ2V0LCBkaXNyZWdhcmQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInNvdXJjZTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcInRhcmdldDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImRpc3JlZ2FyZFwiOiBcImJvb2xlYW5cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggc291cmNlICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHNvdXJjZVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIHRhcmdldCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0YXJnZXRcIiApO1xyXG5cdH1cclxuXHJcblx0ZGlzcmVnYXJkID0gd2ljaGV2ciggZGlzcmVnYXJkLCBmYWxzZSApO1xyXG5cclxuXHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCBzb3VyY2UgKVxyXG5cdFx0LmZvckVhY2goIGZ1bmN0aW9uIG9uRWFjaFN5bWJvbCggc3ltYm9sICl7XHJcblx0XHRcdGlmKCAhZGlzcmVnYXJkICl7XHJcblx0XHRcdFx0Y29wcm9wKCBzeW1ib2wsIHNvdXJjZSwgdGFyZ2V0ICk7XHJcblxyXG5cdFx0XHR9ZWxzZSBpZiggIWtlaW4oIHN5bWJvbCwgdGFyZ2V0ICkgKXtcclxuXHRcdFx0XHRjb3Byb3AoIHN5bWJvbCwgc291cmNlLCB0YXJnZXQgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc3ltO1xyXG4iXX0=
//# sourceMappingURL=transym.support.js.map

var OCRPlugin = { 
	callNativeFunction: function (success, fail, resultType) { 
 
		return Cordova.exec( success, fail, "OCRPlugin", "recogniseOCR", [resultType]); 
		} 
	};

//Initialize counter of passed tests
assert.count = 0;

function assert(message, expr) {
	if (!expr) {
		throw new Error(message);
	}

	assert.count++;
	
	return true;
}

//Green or Red test
function output(text, color) {
	var p = document.createElement("p");
	p.innerHTML = text;
	p.style.color = color;
	document.body.appendChild(p);
}

//For checking a test, 
function testCase(name, tests) {
	assert.count = 0;
	var successful = 0;
	var testCount = 0;
	var successfulColor = "#0c0"	
	var failureColor = "#c00"

	for (var test in tests) {
		if (!/^test/.test(test)) {
			continue;
		}
		
		testCount++;

		try {
			tests[test]();
			output(test, successfulColor);
			successful++;
		} catch (e) {
			output(test + " failed: " + e.message, failureColor);
		}

	}
	var color = successful == testCount ? successfulColor : failureColor;

	output("<strong>" + testCount + " tests, " + (testCount - successful) + "failures</strong", color);
	
}

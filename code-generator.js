'use strict';

function generate(type) {
	let str = '';
	const name = type['$'].name;

	str = `function ${name}() {`;
	// for ()
	str += '};';

	return str;
}


module.exports = {
	generate: generate
};
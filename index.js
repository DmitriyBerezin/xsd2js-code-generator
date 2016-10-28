'use strict';

const xsd = require('./xsd-parser');
const generator = require('./code-generator');

const filePath = __dirname + '/foo.xml';
const parser = new xsd.XsdParser();
parser.parse(filePath).then(onSuccess).catch(onFail);

function onSuccess(data) {
	const name = 'payment';
	const type = parser.findComplexType(name);
	const code = generator.generate(type);
	console.log(code);

	// for (let name of complexTypes) {
	// 	generator.generate(name);
	// }
}

function onFail(err) {
}
'use strict';

const fs = require('fs');
const xml2js = require('xml2js');


function XsdParser() {
	this._schema = null;
}

XsdParser.prototype = {
	parse: function(filePath) {
		return new Promise((resolve, reject) => {
			fs.readFile(filePath, (err, data) => {
				if (err) {
					reject(err);
					return;
				}

				const parser = new xml2js.Parser();
				parser.parseString(data, (err, result) => {
					if (err) {
						reject(err);
						return;
					}

					this._schema = result['xs:schema'];
					resolve(result);
				});
			});
		});
	},

	getComplexTypeList: function() {
		// parseAsserttion();

		return this._schema['xs:complexType'];
	},

	findComplexType: function(name) {
		// parseAsserttion();

		return this._schema['xs:complexType'].find((item) => item['$'].name === name);
	}
};

function parseAsserttion() {
	if (!this._schema) {
		let err = `
			The instance was\'t initialized.
			Please, call .parse() method firstly.
		`;
		throw new Error(err);
	}
}

module.exports = {
	XsdParser: XsdParser
};
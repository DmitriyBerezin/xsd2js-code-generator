
const DASH_REGEX = /-(a-z)/g;


function dash2camelCase(dashStr) {
	return dashStr.replace(DASH_REGEX, (groups) => groups[1].toUpperCase());
}


module.exports = {
	dash2camelCase: dash2camelCase
};
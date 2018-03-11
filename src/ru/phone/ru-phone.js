'use strict';

var StringMask = require('string-mask');
var maskFactory = require('../../helpers/mask-factory');

var phoneMaskRU = new StringMask('+0 (000) 000-0000'),
	phoneMaskINTL = new StringMask('+0-000-000-000000');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^0-9]/g, '');
	},
	format: function(cleanValue) {
		var formattedValue;

		if (cleanValue.length <= 11) {
			formattedValue = phoneMaskRU.apply(cleanValue) || '';
		} else {
			formattedValue = phoneMaskINTL.apply(cleanValue);
		}

		return formattedValue.trim().replace(/[^0-9]$/, '');
	},
	validations: {
		ruPhoneNumber: function(value) {
			return value && value.toString().length > 9;
		}
	}
});

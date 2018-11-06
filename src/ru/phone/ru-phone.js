'use strict';

var StringMask = require('string-mask');
var maskFactory = require('../../helpers/mask-factory');

var phoneMaskRU = new StringMask('+0 (000) 000-0000'),
	phoneMask12 = new StringMask('+000-00-000-00-00'),
	phoneMaskINTL = new StringMask('+0-000-000-000000');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^0-9]/g, '');
	},
	format: function(cleanValue) {
		var formattedValue;

		if (cleanValue.length <= 11) {
			formattedValue = phoneMaskRU.apply(cleanValue) || '';
		} else if (cleanValue.length === 12) {
			formattedValue = phoneMask12.apply(cleanValue);
		} else {
			formattedValue = phoneMaskINTL.apply(cleanValue);
		}

		return formattedValue.trim().replace(/[^0-9]$/, '');
	},
	validations: {
		ruPhoneNumber: function(value) {
			return value && value.toString().length > 6;
		}
	}
});

'use strict';

var m = angular.module('ui.utils.masks.ru', [])
	.directive('uiRuPhoneNumberMask', require('./phone/ru-phone'));

module.exports = m.name;

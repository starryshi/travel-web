var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune cookie tests',function(){
	test('getFortune()返回成功',function(){
		expect(typeof fortuness.getFortune()==='string');
	});
});
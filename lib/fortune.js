var fortuneCookies=[
	"conquer your fears",
	"Rivers need springs",
	"Do not fear what you don't know",
	"you will have a suprise",
	"keep it simple"
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx];
};
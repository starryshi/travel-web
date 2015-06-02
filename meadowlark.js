var express = require('express');
var app = express();

//设置handlebars视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT||3000);

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.render('home');

});
app.get('/about',function(req,res){
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:randomFortune});
});
//404页面
app.use(function(req,res){
	res.status(404);
	res.render('404');
});

//500页面
app.use(function(err,req,res,next){	
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('bulabula');
});

var fortunes=[
	"conquer your fears",
	"Rivers need springs",
	"Do not fear what you don't know",
	"you will have a suprise",
	"keep it simple"
];


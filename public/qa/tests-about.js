suite('"about" page Tests',function(){
	test('contain link to contact page',function(){
		assert($('a[href="/contact"]').length);
	});
});
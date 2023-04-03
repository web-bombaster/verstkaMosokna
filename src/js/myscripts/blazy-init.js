// https://github.com/dinbror/blazy/
// http://dinbror.dk/blog/blazy/#Usage


let blazy = new Blazy();

let homeContentImg = new Blazy({ 
	breakpoints: [{
		  width: 480 // max-width
	, src: 'data-src-small'
	 }
	   , {
		  width: 992 // max-width
		, src: 'data-src-medium'
}]
});
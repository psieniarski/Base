# Jaskier
Tiny JavaScript framework

Works well with *browserify*.


## UI hash
```js
var Page = Jaskier.extend({
	ui: {
		navbar: '#navbar',
		main: '#main',
		footer: '#footer'
	}

	yourFunc: function() {
		this.ui.navbar // cached $('#navbar') is available here  
	}
}); 

var page = new Page();  
page.ui.navbar // and here

```

## Events
```js
  var Page = Jaskier.extend({
	ui: {
		button: '.button',
	},

	events: {
		'@button click': 'buttonClicked'
	},

	buttonClicked: function() {}  
}); 

```

## Breakpoints
```js
var Page = Jaskier.extend({
	breakpoints: {
		// CSS media queries style 
		mobile: '(max-width: 767px)',
		tablet: '(min-width: 768px) and (max-width: 1090px)'
	},

	mobile: function() {},       // call when mobile breakpoint match  
	notMobile: function() {},    // call when mobile breakpoint unmatch
	tablet: function() {},		 // call when tablet breakpoint match 
	notTablet: function() {}     // call when mobile breakpoint unmatch
});	
```

Inspired by Marionette (http://marionettejs.com)

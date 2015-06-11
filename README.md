# JaSkier
Tiny js framework

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

Inspired by Marionette (http://marionettejs.com)

// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Flores',
	dialog: {
		title: 'Flores',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/flor/',
    	url: 'flor.html',
    	name: 'flor',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/cat/',
    	url: 'cat.html',
    	name: 'cat',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnAlerta').on('click',function(){
	app.dialog.alert('Hola Diseño Web');
});


 


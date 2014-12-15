// get the scripts tags on the page
var scripts = document.getElementsByTagName('script');
var thisScript = scripts[ scripts.length - 1 ];

// hide the block that has the script tag in it
thisScript.parentElement.parentElement.parentElement.parentElement.style.display = "none"

var queryString = thisScript.src.replace(/^[^\?]+\??/,'');
var params = parseQuery( queryString );

function parseQuery ( query ) {
	var Params = new Object ();
	if ( ! query ) return Params; // return empty object
	var Pairs = query.split(/[;&]/);
	for ( var i = 0; i < Pairs.length; i++ ) {
		var KeyVal = Pairs[i].split('=');
		if ( ! KeyVal || KeyVal.length != 2 ) continue;
		var key = unescape( KeyVal[0] );
		var val = unescape( KeyVal[1] );
		val = val.replace(/\+/g, ' ');
		Params[key] = val;
	}
	return Params;
}


window.intercomSettings = {
	name: params['name'],
	email: params['email'],
	app_id: params['appId'],
	"company": {
		"id": params['orgId'],
		"name": params['company'],
		"plan": "pro",
		"system": "salesforce"
	}
};

(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/aadhbcv9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

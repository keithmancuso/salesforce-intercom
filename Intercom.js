var iframe;

document.addEventListener("DOMContentLoaded", function(event) { 



	iframe = document.querySelector('iframe[title=Intercom]');

	var readyStateCheckInterval = setInterval(function() {

	    if (iframe.contentDocument.readyState === "complete") {
	        initIntercom();
	        clearInterval(readyStateCheckInterval);
	    }

	}, 100);


});


function initIntercom () {
	console.log("Iframe is now loaded.", iframe.contentDocument.getElementById('intercom-name'));


	window.intercomSettings = {
	  name: iframe.contentDocument.getElementById('intercom-name').innerHTML,
	  email: iframe.contentDocument.getElementById('intercom-email').innerHTML,
	  app_id: "aadhbcv9",
	  "company": {
	    "id": iframe.contentDocument.getElementById('intercom-company-id').innerHTML,
	    "name": iframe.contentDocument.getElementById('intercom-company-name').innerHTML,
	    "plan": "pro",
	  }
	  
	};

}

	(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/aadhbcv9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()                                 


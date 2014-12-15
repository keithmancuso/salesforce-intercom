## Intercom for Salesforce

A simple way to inject the intercom chat widget into every page in salesforce.  

Designed for Salesforce consultants to provide support to their customers directly within salesforce.

Just a few simple steps and you'll be up and running

1. Create a new static resource and upload this js file to it
2. Create a new "Custom Link" under Customize > Home > Custom Links and name it intercom
3. Set behavior to "Execute Javascript" and leave the content source to "OnClick Javascript" (but dont worry your users wont have to click anything)
4. Paste the following code into the content box, and make sure to replace YOURAPPIDHERE with your intercom app Id:

```
{!REQUIRESCRIPT("/resource/Intercom"+"?email="+$User.Email+"&name="+$User.FirstName+" "+ $User.LastName+"&company="+$Organization.Name+"&orgId="+Organization.Id+"&appId=YOURAPPIDHERE")}
```

5. Create a new "Custom Component" under Customize > Home > Homepage Components and Name it "Intercom" and select the type "Links"
6. Under Custom Links to show select the "Intercom" link you made in step 4
7. Then you have to add the component to any homepage layout you want it to show for, so go to Customize > Home > Home page Layouts and edit all of the layouts currently in use.
8. Under "Select Narrow Components to Show" select your new "Intercom" Component.
9. On the next screen, the default component ordering is fine, just save the layout.
10. And finally if you havent already make sure "Show Custom Sidebar Components on All Pages" is checked, under Customize > User Interface

And you should be all set, every standard page (or custom page with the sidebar) should show the intercom widget!

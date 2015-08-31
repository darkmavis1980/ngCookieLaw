# crErrors - Creme Global's error pages

### Prefixes
sass variables prefix is "crerr-"  
css classes prefix is "error-"

### Customize pages

By default, template is stored in the 'bower_components/crErrors/src/' folder, but if you need to customize that path, you need to add the following code at your app.js file

```
.run(function(ErrorManager) {
  // custom template folder
  ErrorManager.setPath('custom_template_folder/');
})
```

By default the service has 404, 403 and 500 error pages. If you want to add extra error pages, just add the following code (you can combine with the path option above)

```
.run(function(ErrorManager) {
  // adds extra error page
  ErrorManager.setError({'303': '__ERROR_303__'});
});
```

### Tests

To run the integrated test with Jasmine, just type:
Command: `grunt`

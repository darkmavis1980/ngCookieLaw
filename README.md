# ngCookieLaw - Cookie law plugin

### Prefixes
sass variables prefix is "crcl-"  
css classes prefix is "crcl-"

### Usage
Simply include the tag `<cookie-law website="Your website" details-link="http://yourwebsite.com/cookiepolicy.html" close-btn-label="OK"></cookie-law>"`.
The tag contains three attributes, the `website` attribute which simply states the name of your website, the `details-link` which is the link to your cookie policy page on your website, and the `close-btn-label`, which is simply the label of the button that closes the cookie policy bar.

#### Position
By default the banner sits on top of the viewport, to change it to be at the bottom simply add the attribute `position="bottom"` to the <cookie-law> tag.

### Generate CSS file from SASS file
To generate the CSS file from the SASS file simply call the grunt task *sass* with the command `grunt sass`. There's also a *watch* task in case the SASS file has to be edited to generate the CSS file on the fly, simply use `grunt watch`

### Updating the CHANGELOG.md
To update the the *CHANGELOG.md* file, you need to first update the package version on the *bower.json* and *package.json* files first, and then run the grunt command `grunt changelog`. This will add the version heading and links, after that you just need to write down the changes.

### Tests

To run the integrated test with Jasmine, just type:
Command: `grunt`
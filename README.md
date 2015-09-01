# crCookieLaw - Creme Global's cookie law plugin

### Prefixes
sass variables prefix is "crcl-"  
css classes prefix is "crcl-"

### Usage
Simply include the tag `<cookie-law website="Your website" details-link="http://yourwebsite.com/cookiepolicy.html" close-btn-label="OK"></cookie-law>"`.
The tag contains three attributes, the `website` attribute which simply states the name of your website, the `details-link` which is the link to your cookie policy page on your website, and the `close-btn-label`, which is simply the label of the button that closes the cookie policy bar.

#### Position
By default the banner sits on top of the viewport, to change it to be at the bottom simply add the attribute `position="bottom"` to the <cookie-law> tag.

### Tests

To run the integrated test with Jasmine, just type:
Command: `grunt`

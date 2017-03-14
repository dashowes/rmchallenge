exports.config = {
	framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['searchSpec.js'],
    
    onPrepare: function () {
    
        browser.driver.manage().window().setSize(1680, 900);
        
    },
    
    
}
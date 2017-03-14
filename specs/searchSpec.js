var SearchForm = function() {

	// Get page elements
	this.locationField = element(by.model("searchForm.params.location"));
	this.programField = element(by.model("searchForm.params.program"));
	this.dateField1 = element(by.model("searchForm.params.checkIn"));
	this.dateField2 = element(by.model("searchForm.params.checkOut"));
	this.guestsField = element(by.model("searchForm.params.adults"));
	this.roomsField = element(by.model("searchForm.params.rooms"));
	this.submitButton = element(by.css(".rm-btn-orange.search-submit-btn"));

	// Access toggle/modal menus within page elements
	this.programMenu = this.programField.element(by.css(".btn-group")).$$(".dropdown-menu");
	this.datePicker = element(by.css(".ui-datepicker"));
	this.guestsMenu = this.guestsField.element(by.css(".btn-group")).$$(".dropdown-menu");
	this.roomsMenu = this.roomsField.element(by.css(".btn-group")).$$(".dropdown-menu");

	// Access clickable elements within toggle/modal menus
	this.programChoice = this.programMenu.all(by.tagName("li")).get(0);
	this.dateChoice1 = this.datePicker.all(by.tagName("a")).get(0);
	this.dateChoice2 = this.datePicker.all(by.tagName("a")).get(2);
	this.guestsChoice = this.guestsMenu.all(by.tagName("a")).get(0);
	this.roomsChoice = this.roomsMenu.all(by.tagName("li")).get(0);

}

// Checks to see if all of the pieces of the search form are present
describe('search form display', function() {
	var searchForm = new SearchForm();

	beforeEach(function() {
		browser.get('http://www.rocketmiles.com');
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
	});

	it('should display the search form', function() {

		expect(searchForm.locationField.isDisplayed()).toBe(true);
		expect(searchForm.programField.isDisplayed()).toBe(true);
		expect(searchForm.dateField1.isDisplayed()).toBe(true);
		expect(searchForm.dateField2.isDisplayed()).toBe(true);
		expect(searchForm.guestsField.isDisplayed()).toBe(true);
		expect(searchForm.roomsField.isDisplayed()).toBe(true);
		expect(searchForm.submitButton.isDisplayed()).toBe(true);
		expect(searchForm.submitButton.getText()).toBe("Search Hotels and Earn Miles");
	});
});

// Checks to see if all of the pieces of the search form are working properly
describe('search form functionality', function() {
	var searchForm = new SearchForm();

	beforeEach(function() {
		browser.get('http://www.rocketmiles.com');
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
	});

	it('should enter a location', function() {

		searchForm.locationField.click();
		browser.waitForAngular();
		searchForm.locationField.sendKeys('Los Angeles, CA, United States');
		browser.actions().sendKeys(protractor.Key.ENTER).perform()
	})

	// Check to see if program selection dropdown menu is working properly
	it('should display the program list and pick a program', function() {

		searchForm.programField.click();
		browser.waitForAngular();
		searchForm.programChoice.click();
	});

	// Check to see if the datepicker is working properly
	it('should pick dates', function() {

		searchForm.dateField1.click();
		browser.waitForAngular();
		searchForm.dateChoice1.click();
		// Datepicker should shift over to the return date field
		searchForm.dateChoice2.click();
	});

	// Check to see if the guests menu is working properly
	it('should display the guests menu and pick a number of guests', function() {

		searchForm.guestsField.click();
		browser.waitForAngular();
		searchForm.guestsChoice.click();
	});

	// Check to see if the rooms menu is working properly
	it('should display the rooms menu and pick a number of rooms', function() {

		searchForm.roomsField.click();
		browser.waitForAngular();
		searchForm.roomsChoice.click();
	});

	// Ensure submit button works properly
	it('should click the submit button', function() {

		searchForm.submitButton.click();
	});
});






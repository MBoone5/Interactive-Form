// Custom JavaScript for Interactive Form Project for JavaScript TechDegree

// Readying the document before any JavaScript runs
$(document).ready(() => {
	//Constants for HTML Element references

	//Placing focus on first form
	$("input:text:visible:first").focus();

	//ALL FORMS ARE UNOBTRUSIVE
	// Creating variables for important "select" form elements
	const $jobSelectForm = $("#title");
	const $otherOption = $("option[value='other']");

	// Creating 'other' response Element
	const $otherTitle = $("<input>")
	$($otherTitle).attr('id', 'other-title').attr('type', 'text').attr('placeholder', 'Your Job Title...')

	// Adding 'other-title' to document
	$jobSelectForm.after($otherTitle)

	//Hiding the 'other-title' form for unobtrusive-ness
	$otherTitle.hide();

	// event listener for job select form
	$jobSelectForm.change( (event) => {
		let $currentOption = $(event.target).val();

		if ($currentOption === "other") {
			$otherTitle.show();
		}else {
			$otherTitle.hide();
		}
	});

	//T-Shirt color menu that has conditional options based on the chosen design
	//JS Puns - Conrflower Blue, Dark Slate Grey, Gold
	//Heart JS - Tomato, Steel Blue, Dim Grey
	//Color menu updates if design changes

	//Important variables for T-Shirt select form
	const $designSelectForm = $("#design");
	const $colorSelectForm = $("#color");



	//Activities section: Events cannot conflict, and the sum of admission on the fly
	//Workshop time cannot conflict, and the conflictions are updated with changes in input
		//Tues 0900-1200: JS Frameworks, Express
		//Tues 1300-1600: JS Libraries, Node.js

	//Payment section that shows chosen payment method div based on selection
	//I.e. if Bitcoin is chosen, the fields for paypal and card are hidden

	//Validated all of the above forms on the fly, and before letting the user post the form
	//All form validatoin error messages must be custom and not HTML5 based
	//Error messages are conditional
		//i.e. If the field has some content, but incorrect content, the error message specifies the issue



});

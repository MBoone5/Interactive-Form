// Custom JavaScript for Interactive Form Project for JavaScript TechDegree

// Readying the document before any JavaScript runs
$(document).ready(() => {
	//Constants for HTML Element references

	//Placing focus on first form
	$("input:text:visible:first").focus();

	//ALL FORMS ARE UNOBTRUSIVE
	// Creating a varialbe for 'other' option
	let $otherOption = $("option:contains('Other')");

	// conditional statement for if 'other' is selected
	if ($($otherOption + ":selected")) {

	} else {

	}

		//'Design' and 'Color' fields are hidden until the previous field has recieved input
		//T-Shirt color menu that has conditional options based on the chosen design
			//JS Puns - Conrflower Blue, Dark Slate Grey, Gold
			//Heart JS - Tomato, Steel Blue, Dim Grey
	 	//Color menu updates if design changes


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

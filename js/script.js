// Custom JavaScript for Interactive Form Project for JavaScript TechDegree

// Readying the document before any JavaScript runs
$(document).ready(() => {
	//Placing focus on first form
	$("input:text:visible:first").focus();

	// Creating variables for important "select" form elements
	const $jobSelectForm = $("#title");
	const $otherOption = $("option[value='other']");

	// Creating 'other' response Element
	const $otherTitle = $("<input>");
	$($otherTitle).attr('id', 'other-title').attr('type', 'text').attr('placeholder', 'Your Job Title...');

	// Adding 'other-title' to document
	$jobSelectForm.after($otherTitle);

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
	const $punsColors = $(".puns-color");
	const $heartColors= $(".heart-color");


	// Hiding Color form
	$colorSelectForm.hide();

	// Event listener for T-shirt colors
	$designSelectForm.change((event) => {
		// Variable for current design selected
		let $currentDesign = $(event.target).val();
		console.log($currentDesign);
		$colorSelectForm.prop("selectedIndex", 0);
		// Conditional color form functionality
		if ($currentDesign !== "default") {
			$colorSelectForm.show();
		}else {
			$colorSelectForm.hide();
		}
		// Conditonal colors functionality
		if ($currentDesign === "js puns") {
			$heartColors.hide();
			$punsColors.show();
		} else {
			$heartColors.show();
			$punsColors.hide();
		}
	});

	// important variables for activites form
	const $activitiesForm = $(".activities");
	const $activitiesEvents = $(":checkbox");
	const $aEvents = $("input.slot-a");
	const $bEvents = $("input.slot-b");

	// event handler for slot a events
	$aEvents.change((event) => {
		// key variables for A events functionality
		let $selectedAEvent = $(event.target);
		let $checkedStatus = $("input.slot-a:checked");

		// if one a event is selected, diable th eother
		$aEvents.not($selectedAEvent).prop("disabled", true);

		// if no a events are checked, both are enabled
		if ($checkedStatus.length === 0) {
			$aEvents.prop("disabled", false);
		}
	});

	// event handler for slot b events
	$bEvents.change((event) => {
		// key variables for A events functionality
		let $selectedAEvent = $(event.target);
		let $checkedStatus = $("input.slot-b:checked");

		// if one a event is selected, diable th eother
		$bEvents.not($selectedAEvent).prop("disabled", true);

		// if no a events are checked, both are enabled
		if ($checkedStatus.length === 0) {
			$bEvents.prop("disabled", false);
		}
	});

	// elements for displaying sum
	$sumDiv = $("<div></div>").attr("id", "sum-div");
	$sumH = $("<h1></h1>").text("$0");
	$activitiesForm.append($sumDiv);
	$sumDiv.append($sumH);

	// event handler for updating sum
	function add(a, b) {
		return a + b;
	}

	$activitiesForm.change((event) => {
		// add prices to an array
		let $checkedEventsPrices = [0];
		$('.activities input:checked').each(function() {
    $checkedEventsPrices.push($(this).attr("value"))
		});

		// get sum of prices
		let sum = $checkedEventsPrices.reduce((a, b) => {
			a = parseInt(a);
			b = parseInt(b);
			return a + b;
		});

		// add value of sum to document
		$sumH.text("$" + sum);
	});

	//Payment section that shows chosen payment method div based on selection
	//I.e. if Bitcoin is chosen, the fields for paypal and card are hidden
	// important variables for payment forms
	const $methodSelect = $("#payment");
	const $cardInfo = $("#credit-card");
	const $palMessage = $("#pal-div");
	const $coinMessage = $("#coin-div");
	// this is declared globally so multiple functions can access it
	let cardSelected = false;

	// hiding forms initially
	$cardInfo.hide();
	$palMessage.hide();
	$coinMessage.hide();

	// function for showing the appropriate fields/message based on payment method
	function showPayment(method) {
		if (method === "credit") {
			$cardInfo.show();
			$palMessage.hide();
			$coinMessage.hide();
		}else if (method === "paypal") {
			$palMessage.show();
			$cardInfo.hide();
			$coinMessage.hide();
		}else if (method === "bitcoin") {
			$coinMessage.show();
			$cardInfo.hide();
			$palMessage.hide();
		}else {
			$cardInfo.hide();
			$palMessage.hide();
			$coinMessage.hide();
		}
	}
	
	// event handler for payment forms
	$methodSelect.change((event) => {
		let $selectedMethod = $(event.target).val();
		// conditional for showing form info
		if ($selectedMethod === "credit card") {
			cardSelected = true;
			showPayment("credit");
		}else if ($selectedMethod === "paypal"){
			cardSelected = false;
			showPayment("paypal");
		}else if ($selectedMethod === "bitcoin") {
			cardSelected = false;
			showPayment("bitcoin");
		}else {
			cardSelected = false;
			showPayment(false);
		}
	});
	// important variables for form validation
	const $nameField = $("#name");
	// const $activitiesForm = $(".activities");
	// const $activitiesEvents = $(":checkbox");
	const $cardFields = $("#credit-card input");
	const $submitButton = $("button");
	const $nameTipDiv = $("#name-tip");
	const $digitTip = $("#digit-tip");
	const $specTip = $("#spec-tip");
	const $anyTip = $("#any-tip");
	const $mailTip = $("#email-tip");
	const $actTip = $("#act-tip");
	const $cardTip = $("#card-tip");
	const $cvvTip = $("#cvv-tip");
	const $zipTip = $("#zip-tip");
	const $payTip = $("#pay-tip");
	let nameHasInput = false;
	let nameValid = false;

	// regular expressions for form validation
	/* declared outside functions to prevent more than one instance of the same
	literal */
	const nameExp = /^[A-Z\-\s]+$/i;
	const emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const cardNumExp = /\d{13}(\d{1,3})?/;
	const zipExp = /\d{5}/;
	const cvvExp = /\d{3}/;
	const containsDigit = /\d/;
	const containsSpec = /[_!@#$%^&*()<>,./?":;[\]\{\}\\\|=+\-~]/;
	const containsAnything = /./;

	// functions for form validation
	/* these are seperate from the validateForms() function to keep things concise and modular */
	// functions for swapping name tip errors
	// word characters only, at least one, space characters and hyphens ok
	/* this function will test if the name field has ever received input, and show the required error if it hasn't, or return the valid status of the name to be passed into the event listener on the name field if has received input */
	function validName() {
		let $nameInput = $nameField.val()
		let nameStatus = nameExp.test($nameInput);
		if (nameHasInput === false) {
			$nameTipDiv.show("fade");
			$digitTip.hide();
			$specTip.hide();
		}else{
			return nameStatus;
		}
	}
	// must follow RFC 5322 Email Standard
	function validEmail() {
		let $emailInput = $("#mail").val();
		let emailStatus = emailExp.test($emailInput);
		if (emailStatus) {
			$mailTip.hide("fade");
		}else {
			$mailTip.show("fade");
		}
		return emailStatus
	}
	// minimum 13, maximum 16 digit sequence
	function validCreditCard() {
		let $cardNumInput = $("#cc-num").val();
		let cardStatus = cardNumExp.test($cardNumInput);
		if (cardStatus) {
			$cardTip.hide("fade")
		}else {
			$cardTip.show("fade")
		}
		return cardStatus
	}
	// 5 digit sequence
	function validZip() {
		let $cardZipInput = $("#zip").val();
		let zipStatus = zipExp.test($cardZipInput);
		if (zipStatus) {
			$zipTip.hide("fade")
		}else {
			$zipTip.show("fade")
		}
		return zipStatus
	}
	// 3 digit sequence
	function validCvv() {
		let $cardCvvInput = $("#cvv").val();
		let cvvStatus = cvvExp.test($cardCvvInput);
		if (cvvStatus) {
			$cvvTip.hide("fade")
		}else {
			$cvvTip.show("fade")
		}
		return cvvStatus
	}
	// must have at least one event selectedIndex
	function validActivities() {
		let $checkedEvents = $("input:checked")
		if ($checkedEvents.length > 0) {
			$actTip.hide("fade")
			return true;
		} else {
			$actTip.show("fade")
			return false;
		}
	}
	// must have selected a mehtod of Payment
	function validPayment() {
		if ($methodSelect.val() != "select_method") {
			$payTip.hide("fade")
			return true
		}else {
			$payTip.show("fade")
			return false
		}
	}
	// event handler for on the fly validation
	$nameField.bind("input", (event) => {
		let $nameInput = $(event.target).val();
		nameHasInput = true
		if (validName()) {
			nameValid = true
			$nameTipDiv.hide("fade")
		}else {
			nameValid = false;
			$nameTipDiv.show("fade");
			if (containsDigit.test($nameInput)) {
				$digitTip.show();
				$specTip.hide();
				$anyTip.hide();
			} else if (containsSpec.test($nameInput)) {
				$digitTip.hide();
				$specTip.show();
				$anyTip.hide();
			}else if (!containsAnything.test($nameInput)) {
				$nameField.effect("shake");
				$digitTip.hide();
				$specTip.hide();
				$anyTip.show();
			}
		}
	});

	// function to cause scroll up to first visible error
	function scrollToError() {
		$("html, body").animate({
			scrollTop: $(".form-tip:visible:first").offset().top - 100
		}, 1000);
	}
	/* Even though it might be more logical or appealing for the conditional to test if the name is filled out properly first, it throws an error on "offset().top" if nameValid is tested first because an error isn't present by default, even though nameValid is false by default */
	function validateForms() {
		if (cardSelected) {
			if (validName() && validEmail() && validActivities() && validPayment() && validCreditCard() && validZip() && validCvv()) {
				return true;
			}else {
				scrollToError();
				return false;
			}
		}else {
			if (validName() && validEmail() && validActivities() && validPayment()) {
				return true;
			}else {
				scrollToError();
				return false;
			}
		}
	}

	$submitButton.click((event) => {
		let validationState = validateForms();
		console.log(validationState);
		if (validationState === false) {
			event.preventDefault();
		}
	})
});

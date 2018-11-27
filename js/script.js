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
		};

		// Conditonal colors functionality
		if ($currentDesign === "js puns") {
			$heartColors.hide();
			$punsColors.show();
		} else {
			$heartColors.show();
			$punsColors.hide();
		}
	})

	// important variables for activites form
	const $activitiesForm = $(".activities");
	const $activitiesEvents = $(":checkbox")
	const $aEvents = $("input.slot-a");
	const $bEvents = $("input.slot-b");

	// event handler for slot a events
	$aEvents.change((event) => {
		// key variables for A events functionality
		let $selectedAEvent = $(event.target);
		let $checkedStatus = $("input.slot-a:checked")


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
		let $checkedStatus = $("input.slot-b:checked")

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
	$sumDiv.append($sumH)

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
			a = parseInt(a)
			b = parseInt(b)
			return a + b
		});
		console.log(sum);

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

	// hiding forms initially
	$cardInfo.hide();
	$palMessage.hide();
	$coinMessage.hide();

	// event handler for payment forms
	$methodSelect.change((event) => {
		let $selectedMethod = $(event.target).val();
		// conditional for showing form info
		if ($selectedMethod === "credit card") {
			$cardInfo.show();
			$palMessage.hide();
			$coinMessage.hide();
		}else if ($selectedMethod === "paypal") {
			$palMessage.show();
			$cardInfo.hide();
			$coinMessage.hide();
		}else if ($selectedMethod === "bitcoin") {
			$coinMessage.show();
			$cardInfo.hide();
			$palMessage.hide();
		}else {
			$cardInfo.hide();
			$palMessage.hide();
			$coinMessage.hide();
		}
	});


	//Validated all of the above forms on the fly, and before letting the user post the form
	//All form validatoin error messages must be custom and not HTML5 based
	//Error messages are conditional
		//i.e. If the field has some content, but incorrect content, the error message specifies the issue



});

function setupForm() {
	document.myForm.addEventListener("submit", processForm, false);
	document.myForm.firstName.addEventListener("focus", firstNameFocus, false);
	document.myForm.firstName.addEventListener("blur", firstNameBlur, false);
	document.myForm.lastName.addEventListener("focus", lastNameFocus, false);
	document.myForm.lastName.addEventListener("blur", lastNameBlur, false);
	document.myForm.phoneNum.addEventListener("focus", phoneNumFocus, false);
	document.myForm.phoneNum.addEventListener("blur", phoneNumBlur, false);
	document.myForm.emailAdd.addEventListener("focus", emailAddFocus, false);
	document.myForm.emailAdd.addEventListener("blur", emailAddBlur, false);
	document.myForm.stuAdd.addEventListener("focus", stuAddFocus, false);
	document.myForm.stuAdd.addEventListener("blur", stuAddBlur, false);

}

var validFlag = false;

//trigger on focus
function firstNameFocus() {
	while(hintFirstName.hasChildNodes()) {
		hintFirstName.removeChild(hintFirstName.lastChild);
	}
	var span = document.createElement("span");

	var hint = document.createTextNode("First Name: Please enter letters only.");

	span.setAttribute("class", "hint");

	span.appendChild(hint);

	document.getElementById("hintFirstName").appendChild(span);

	console.log("Please enter letters only.");
}


//validation function
function firstNameBlur() {
	//se concepts on RegEx: regex101.com
	//RegEx String.match()

	var myRegEx = /^[a-zA-Z]+$/; //all letters only
	var firstNameValue = document.myForm.firstName.value;

	//blank or number gives null
	if (firstNameValue.match(myRegEx) != null) {
		console.log("Valid");
		//DOM for checkmark/correct icon

		var span = document.createElement("span");
		var correct = document.createElement("img");
		correct.setAttribute("src", "img/img_checkmark.png");

		correct.setAttribute("class", "smallIcon");
		span.appendChild(correct);

		document.getElementById("hintFirstName").appendChild(span);
		validFlag = true;
	}
	else {
		console.log("Invalid");
		//DOM for incorrect icon ex. red X
		var span = document.createElement("span");
		var incorrect = document.createElement("img");
		incorrect.setAttribute("src", "img/img_incorrect.png");

		incorrect.setAttribute("class", "smallIcon");
		span.appendChild(incorrect);

		document.getElementById("hintFirstName").appendChild(span);
		validFlag = false;
	}
}

//trigger on focus
function lastNameFocus() {
	while(hintLastName.hasChildNodes()) {
		hintLastName.removeChild(hintLastName.lastChild);
	}
	var span = document.createElement("span");

	var hint = document.createTextNode("Last Name: Please enter letters only.");

	span.setAttribute("class", "hint");

	span.appendChild(hint);

	document.getElementById("hintLastName").appendChild(span);


	console.log("Please enter letters only.");
}

//validation function
function lastNameBlur() {
	//RegEx String.match()

	var myRegEx = /^[a-zA-Z]+$/; //all letters only
	var lastNameValue = document.myForm.lastName.value;

	//blank or number gives null

	if (lastNameValue.match(myRegEx) != null) {
		console.log("Valid");

		var span = document.createElement("span");
		var correct = document.createElement("img");
		correct.setAttribute("src", "img/img_checkmark.png");

		correct.setAttribute("class", "smallIcon");
		span.appendChild(correct);

		document.getElementById("hintLastName").appendChild(span);
		
		validFlag = true;
	}
	else {
		console.log("Invalid");
		//DOM for incorrect icon
		var span = document.createElement("span");
		var incorrect = document.createElement("img");
		incorrect.setAttribute("src", "img/img_incorrect.png");

		incorrect.setAttribute("class", "smallIcon");
		span.appendChild(incorrect);

		document.getElementById("hintLastName").appendChild(span);
		validFlag = false;
	}
}

function phoneNumFocus() {
	while(hintPhone.hasChildNodes()) {
		hintPhone.removeChild(hintPhone.lastChild);
	}
	var span = document.createElement("span");

	var hint = document.createTextNode("Phone Number: Please enter numbers in XXX-XXX-XXX format.");

	span.setAttribute("class", "hint");

	span.appendChild(hint);

	document.getElementById("hintPhone").appendChild(span);
	console.log("Please enter numbers in XXX-XXX-XXX format.");
}

//validation function
function phoneNumBlur() {
	var myRegEx = /\d{3}-\d{3}-\d{4}/;
	var phoneNumValue = document.myForm.phoneNum.value;

	if (phoneNumValue.match(myRegEx) != null) {
		console.log("Valid");

		var span = document.createElement("span");
		var correct = document.createElement("img");
		correct.setAttribute("src", "img/img_checkmark.png");

		correct.setAttribute("class", "smallIcon");
		span.appendChild(correct);

		document.getElementById("hintPhone").appendChild(span);
		validFlag = true;
	}
	else {
		console.log("Invalid");
		var span = document.createElement("span");
		var incorrect = document.createElement("img");
		incorrect.setAttribute("src", "img/img_incorrect.png");

		incorrect.setAttribute("class", "smallIcon");
		span.appendChild(incorrect);

		document.getElementById("hintPhone").appendChild(span);
		validFlag = false;
	}
}

function emailAddFocus() {
	while(hintEmail.hasChildNodes()) {
		hintEmail.removeChild(hintEmail.lastChild);
	}
	var span = document.createElement("span");

	var hint = document.createTextNode("E-Mail Address: Please enter an email in blah@blah.com format.");

	span.setAttribute("class", "hint");

	span.appendChild(hint);

	document.getElementById("hintEmail").appendChild(span);

	console.log("Please enter an email in blah@blah.com format.");
}

//validation function
function emailAddBlur() {
	var myRegEx = /[a-zA-Z]+\w+\W[a-zA-Z]+\W\w+/;
	var emailAddValue = document.myForm.emailAdd.value;

	if (emailAddValue.match(myRegEx) != null) {
		console.log("Valid");

		var span = document.createElement("span");
		var correct = document.createElement("img");
		correct.setAttribute("src", "img/img_checkmark.png");

		correct.setAttribute("class", "smallIcon");
		span.appendChild(correct);

		document.getElementById("hintEmail").appendChild(span);
		validFlag = true;
	}
	else {
		console.log("Invalid");
		var span = document.createElement("span");
		var incorrect = document.createElement("img");
		incorrect.setAttribute("src", "img/img_incorrect.png");

		incorrect.setAttribute("class", "smallIcon");
		span.appendChild(incorrect);

		document.getElementById("hintEmail").appendChild(span);
		validFlag = false;
	}
}

function stuAddFocus() {
	while(hintStuAdd.hasChildNodes()) {
		hintStuAdd.removeChild(hintStuAdd.lastChild);
	}
	var span = document.createElement("span");

	var hint = document.createTextNode("Website Address: Please enter your student url starting with http:// and include tilde.");

	span.setAttribute("class", "hint");

	span.appendChild(hint);

	document.getElementById("hintStuAdd").appendChild(span);
	console.log("Please enter your student url starting with http:// and include tilde.");
}

//validation function
function stuAddBlur() {
	var myRegEx = /[a-zA-Z]+\W\W\W[a-zA-Z]+\w+\W+[a-zA-Z]+\W+\w+\W+[a-zA-z]+\W\W[a-zA-Z]+\d{6}/;
	var stuAddValue = document.myForm.stuAdd.value;

	if (stuAddValue.match(myRegEx) != null) {
		console.log("Valid");
		var span = document.createElement("span");
		var correct = document.createElement("img");
		correct.setAttribute("src", "img/img_checkmark.png");

		correct.setAttribute("class", "smallIcon");
		span.appendChild(correct);

		document.getElementById("hintStuAdd").appendChild(span);
		validFlag = true;
	}
	else {
		console.log("Invalid");
		var span = document.createElement("span");
		var incorrect = document.createElement("img");
		incorrect.setAttribute("src", "img/img_incorrect.png");

		incorrect.setAttribute("class", "smallIcon");
		span.appendChild(incorrect);

		document.getElementById("hintStuAdd").appendChild(span);
		validFlag = false;
	}
}

function processForm(event) {
	event.preventDefault(); //doesnt let the form submit elsewhere
	//if it is valid
	if (validFlag == false) {
		console.log("This is not valid.");
	}
	else {
		console.log("First name is: " + 
			document.myForm.elements['firstName'].value + 
			" and last name is: " + 
			document.myForm.elements["lastName"].value);
	};

	
	//where badge is
	var answerAD = document.myForm.elements["americanDad_character"];
	var answer = document.myForm.elements["character"];
		
	
	for (var x = 0; x < answerAD.length; x++) {
		if (answerAD[x].checked && answerAD[x].value == "marineBiology" && answer.value == "fish") {

			var span = document.createElement("span");
		
			var resultKlaus = document.createTextNode("Congrats! " + document.myForm.elements['firstName'].value + " " + document.myForm.elements['lastName'].value + " you are Klaus Heisler. ");
			span.appendChild(resultKlaus);
			span.appendChild(document.createElement("br"));

			var resultPhone = document.createTextNode("Phone Number: " + document.myForm.elements['phoneNum'].value + " ");
			span.appendChild(resultPhone);
			span.appendChild(document.createElement("br"));

			var resultEmail = document.createTextNode("Email: " + document.myForm.elements['emailAdd'].value + " ");
			span.appendChild(resultEmail);
			span.appendChild(document.createElement("br"));

			var resultStuAdd = document.createTextNode("Student Address: " + document.myForm.elements['stuAdd'].value + " ");
			span.appendChild(resultStuAdd);
			span.appendChild(document.createElement("br"));

			span.setAttribute("class", "text");
			document.myForm.appendChild(span);

			var klausPic = document.createElement("img");
			klausPic.setAttribute("src", "img/img_klaus.jpg");
			klausPic.setAttribute("width", "350");
			klausPic.setAttribute("height", "350");
			klausPic.setAttribute("alt", "Drawn picture of Klaus");
			klausPic.style.padding = "10px";
			document.myForm.appendChild(klausPic);
			
			while (klausPic.hasChildNodes()) {
			klausPic.removeChild(klausPic.lastChild);
			}
	}

	else {
			
			var span = document.createElement("span");
		
			var resultRoger = document.createTextNode("Congrats! " + document.myForm.elements['firstName'].value + " " + document.myForm.elements['lastName'].value + " you are Roger Smith. ");
			span.appendChild(resultRoger);
			span.appendChild(document.createElement("br"));

			var resultPhone = document.createTextNode("Phone Number: " + document.myForm.elements['phoneNum'].value + " ");
			span.appendChild(resultPhone);
			span.appendChild(document.createElement("br"));

			var resultEmail = document.createTextNode("Email: " + document.myForm.elements['emailAdd'].value + " ");
			span.appendChild(resultEmail);
			span.appendChild(document.createElement("br"));

			var resultStuAdd = document.createTextNode("Student Address: " + document.myForm.elements['stuAdd'].value + " ");
			span.appendChild(resultStuAdd);
			span.appendChild(document.createElement("br"));
			
			span.setAttribute("class", "text");
			document.myForm.appendChild(span);

		var rogerPic = document.createElement("img");
			rogerPic.setAttribute("src", "img/img_roger.jpg");
			rogerPic.setAttribute("width", "350");
			rogerPic.setAttribute("height", "350");
			rogerPic.setAttribute("alt", "Drawn picture of Roger");
			rogerPic.style.padding = "10px";
			document.myForm.appendChild(rogerPic);
			/*add removeChild loop*/
			while(rogerPic.hasChildNodes()) {
			rogerPic.removeChild(rogerPic.lastChild);
			}
			

	}


	return true;
}

} //processEvent end

window.addEventListener("load", setupForm, false);

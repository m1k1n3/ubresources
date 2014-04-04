function  confirm_delete(event){
	// For older browsers and IE 
	event=event || window.event;
	var res = window.confirm("Do you want to delete this comment?");
	
	if (res == true)
		return true;
	else{
		event.preventDefault();
	}
}


/**
 * This function toggles the 'Post Comment' button depending to the comment being entered
 * 
 * @param   textarea		The input area whose value determines if the button is disabled or not
 */
function toggle_button(input, button_id) {
	var string = input.value;
	if ( string.length > 1 && (/[^\s]/.test(string)))
	{
		if( (string.length - (string.split( new RegExp( "\\s", "gi" ) ).length-1) ) > 1)
		{
			document.getElementById(button_id).disabled = false;
		}
		else{
			document.getElementById(button_id).disabled = true;
		}
	}
	else
	{
		document.getElementById(button_id).disabled = true;
	}
	
}
/**
 * @author Tony
 */


function MyObject() {
	$('#button01').click(foo);
	$("#paragraph01").html("This sentence added by jQuery");
	
	function foo() {
		console.log("foo");
		$("#paragraph02").html("This sentence added by jQuery, too");
	}

}
$(document).ready(function() { 
    MyObject();
});

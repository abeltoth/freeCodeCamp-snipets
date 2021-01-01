$(document).ready(function () { }); // The function will run only if the corresponding HTML is loaded
$("button").addClass("animated bounce"); // Add animated and bounce classes to all buttons
$(".well").addClass("animated bounce"); // We can select classes this way
$("#well").addClass("animated bounce"); // Select id
$("#target2").removeClass("btn-default"); // Remove class
$("#target1").css("color", "blue"); // Change the css of an element
$("button").prop("disabled", true); // Adjust the properties of the elements
$("h3").html("<em>jQuery Playground</em>"); // Adds html inside the selected element
$("h3").text("Playground"); // Change the text of the selected element
$("#target4").remove(); // Remove the selected element completely
$("#target4").appendTo("#left-well"); // Put the selected element inside an another element
$("#target2").clone(); // Copy the selected element
$("#target2").clone().appendTo("#right-well"); // Copy the selected element inside an another element
$("#left-well").parent(); // Select the parent of the element
$("#left-well").children(); // Select the children of the element
$(".target:nth-child(3)"); // Select the nth child of the element
$(".target:odd"); // Select the odd positioned elements (Counting starts from 0)
$(".target:even"); // Select the even positioned elements (Counting starts from 0)
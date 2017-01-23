// business logic
function Place(name, landmark, timeOfYear, notes) {
    this.name = name,
    this.landmark = landmark,
    this.timeOfYeaar = timeOfYear,
    this.notes = notes
}

var sydney = new Place("Sydney, Australia", "Sydney Opera House", "Summer", "Went with youth orchestra");

var portland = new Place("Portland, Oregon", "Oaks Amusement Park", "Summer", "Moved here while a child");

// user interface logic"
$(document).ready(function() {

  $(".sydney").click(function() {
    $("#show-sydney").show();
    $(".city").text(sydney.name);
    $(".landmark").text(sydney.landmark);
  });
  $(".portland").click(function() {
    $("#show-sydney").show();
    $(".city").text(portland.name);
    $(".landmark").text(portland.landmark);
  });
});

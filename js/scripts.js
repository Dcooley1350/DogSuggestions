// BUSINESS LOGIC

function Dog(name, size, energy) {
  this.name = name;
  this.size = size;
  this.energy =energy;
}

var chihuahua = new Dog("chihuahua","small", "active");
var berneseMountainDog = new Dog("bernese","large", "inactive");
var pug = new Dog("pug","small","inactive");
var goldenRetriever = new Dog("golden-retriever","large","active");


function User(name,gender,age,activity,location,sizePref,energyPref, suggestion) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.activity = activity;
  this.location = location;
  this.sizePref = sizePref;
  this.energyPref = energyPref;
  this.suggestion = suggestion;
}

User.prototype.selectDog = function (){
  if ((this.sizePref == "small") && (this.energyPref == "inactive")) {
    return(pug)
  }
  else if ((this.sizePref == "large") && (this.energyPref == "inactive")) {
    return(berneseMountainDog)
  }
  else if ((this.sizePref == "small") && (this.energyPref == "active")) {
    return(chihuahua)
  }
  else if ((this.sizePref == "large") && (this.energyPref == "active")) {
    return(goldenRetriever)
  }
};

User.prototype.displayDog = function() {
  $(".name").text(this.name);
  $("#" + this.suggestion.name).show();
  $("#match").hide();
  $("#return-button").show();
}
 
function attachEventListenerReturnButton() {
  $("button#return").click(function() {
    $("form#match").trigger("reset");
    $("#chihuahua").hide();
    $("#pug").hide();
    $("#bernese").hide();
    $("#golden-retriever").hide();
    $("#return-button").hide();
    $("form#match").show();
  });
};






// FRONT END LOGIC


$(document).ready(function() {
  attachEventListenerReturnButton();

  $("form#match").submit(function(event) {
    event.preventDefault();
    
    var userName = $("input#userName").val();
    var userGender = $("#gender").val();
    var userAgeRange = $("#age").val();
    var userEnergy = $("#activity").val();
    var userLocation = $("#location").val();
    var userSizePref = $("#size").val();
    var userEnergyPref = $("#energy").val();

    var newUser = new User(userName,userGender,userAgeRange,userEnergy,userLocation,userSizePref,userEnergyPref);
    var dogSuggestion = newUser.selectDog();
    newUser.suggestion = dogSuggestion;
    newUser.displayDog();
  });
})
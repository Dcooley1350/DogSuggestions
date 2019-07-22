// BUSINESS LOGIC

function Dog(size,energy) {
  this.size = size;
  this.energy =energy;
}

var chihuahua = new Dog("small", "active");
var berneseMountainDog = new Dog("Large", "inactive");
var Pug = new Dog("small","inactive");
var golderRetriever = new Dog("large","active");


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
  if ((this.sizePref = "small") && (this.energyPref = "inactive")) {
    return(Pug)
  }
  else if ((this.sizePref = "large") && (this.energyPref = "inactive")) {
    return(berneseMountainDog)
  }
  else if ((this.sizePref = "small") && (this.energyPref = "active")) {
    return(chihuahua)
  }
  else if ((this.sizePref = "Large") && (this.energyPref = "active")) {
    return(goldenRetriever)
  }
};

User.prototype.displayDog = function() {
  $("#name").text(this.name)
  $("#" + this.suggestion).show
}







// FRONT END LOGIC


$(document).ready(function() {
  $("#match form").submit(function(event) {
    event.preventDefault();

    var userName = $("input#userName").val();
    var userGender = $("input#gender").val();
    var userAgeRange = $("input#age").val();
    var userEnergy = $("input#activity").val();
    var userLocation = $("input#location").val();
    var userSizePref = $("input#size").val();
    var userEnergyPref = $("input#energy").val();

    var newUser = new User(userName,userGender,userAgeRange,userEnergy,userLocation,userSizePref,userEnergyPref)
    newUser.selectDog() = dogSuggestion
    newUser.suggestion = dogSuggestion;
    newUser.displayDog();
  })
})
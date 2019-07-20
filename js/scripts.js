// BUSINESS LOGIC

function Dog(size,energy) {
  this.size = size;
  this.energy =energy;
}


function User(name,gender,age,activity,location,sizepref,energypref) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.activity = activity;
  this.location = location;
  this.sizepref = sizepref;
  this.energypref =energypref;
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
    var userEnergyPref = $("input#energy")

    var newUser = new User(userName,userGender,userAgeRange,userEnergy,userLocation,userSizePref,userEnergyPref)
  })
})
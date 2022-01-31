var powerRangers = [
    "Jason lee Scott",
    "Kimberly Hart",
    "Zack Taylor",
    "Trini Kwan",
    "Billy Cranston"

]

var reangersList = document.getElementById("rangers")
var newName = document.createElement("li")
newName.textContent = powerRangers[0]
reangersList.append(newName)


for (var i = 0; i < powerRangers.length; i++) {
    // var newName = document.createElement("li")
    // newName.textContent = powerRangers[0]
    // reangersList.append(newName)
    reangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"

}


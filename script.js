var student = {
    name: "Riya",
    grade: "8",
    age: "13",
    favSport: "Cricket",
    hobby: "Drawing"
}

var colors = ["white", "blue", "black", "silver", "red"]

document.getElementById("profile").innerHTML = "Name: " + student.name + " | Favourite sport: " + student.favSport
document.getElementById("favcolor").innerHTML = "My favourite color is " + colors[3]
document.getElementById("before").innerHTML = "Before pop: " + colors.join(" * ") + " (" + colors.length + " colours)"

colors.pop()
document.getElementById("after").innerHTML = "After pop: " + colors.join(" * ") + " (" + colors.length + " colours)"
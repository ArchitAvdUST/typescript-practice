function calculatePremium(profile) {
    var premium = 1000;
    if (profile.age > 80) {
        premium += 1000;
    }
    else if (profile.age > 60) {
        premium += 800;
    }
    else if (profile.age > 40) {
        premium += 600;
    }
    else if (profile.age > 20) {
        premium += 400;
    }
    else {
        premium += 200;
    }
    profile.existing_health_condition.forEach(function (condition) {
        if (condition.toLowerCase() === "diabetes") {
            premium += 3000;
        }
        else if (condition.toLowerCase() === "thyroid") {
            premium += 2000;
        }
        else if (condition.toLowerCase() === "obesity") {
            premium += 1000;
        }
    });
    profile.habits.forEach(function (habit) {
        if (habit.toLowerCase() === "smoking") {
            premium += 1000;
        }
        else if (habit.toLowerCase() === "drinking") {
            premium += 1000;
        }
    });
    return premium;
}
var profile1 = { name: 'Archit', age: 22, habits: [], existing_health_condition: [] };
console.log(calculatePremium(profile1));

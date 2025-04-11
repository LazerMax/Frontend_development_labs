function checkAge(age) {
    if (age >= 0 && age <= 2) {
        return "младенец";
    } else if (age >= 3 && age <= 13) {
        return "ребенок";
    } else if (age >= 14 && age <= 19) {
        return "подросток";
    } else if (age >= 20 && age <= 65) {
        return "взрослый";
    } else if (age >= 66) {
        return "пожилой";
    } else {
        return "Некорректный возраст";
    }
}
console.log(checkAge(20));
console.log(checkAge(1));
console.log(checkAge(100));
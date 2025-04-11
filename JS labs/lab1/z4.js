function calculateCost(groupSize, groupType, day) {
    let prices = {
        "Студенты": { "Пятница": 8.45, "Суббота": 9.80, "Воскресенье": 10.46 },
        "Корпоративная": { "Пятница": 10.90, "Суббота": 15.60, "Воскресенье": 16 },
        "Обычная": { "Пятница": 15, "Суббота": 20, "Воскресенье": 22.50 }
    };
    let totalPrice = groupSize * prices[groupType][day];

    if (groupType === "Студенты" && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Корпоративная" && groupSize >= 100) {
        totalPrice -= prices[groupType][day] * 10;
    } else if (groupType === "Обычная" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;
    }
    return `Общая цена: ${totalPrice.toFixed(2)}`;
}
console.log(calculateCost(30, "Студенты", "Воскресенье"));
console.log(calculateCost(40, "Обычная", "Суббота"));
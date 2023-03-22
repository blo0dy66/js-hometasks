function calcRectangleArea(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
        throw new TypeError("Both parameters must be number");
    }
    return width * height;
}


try {
    const area = calcRectangleArea(10, 5); // 50
    console.log("Rectangle area is:", area);

    const area2 = calcRectangleArea("10", 5); // Тут буде піднято виняток
    console.log("Rectangle area is:", area2);
} catch (error) {
    console.error("Error:", error);
}
class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    if (month < 1 || month > 12) {
        throw new MonthException('Incorrect month number');
    }

    return monthNames[month - 1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (e) {
    console.log(`${e.name} ${e.message}`);
}
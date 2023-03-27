class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${this.name} ${middleName} ${this.surname}`;
    }


    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if (course >= 1 && course <= 6) {
            return course;
        } else {
            return "Invalid course"
        }
    }
}



const stud1 = new Student("Petro", "Petrenko", 2020);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
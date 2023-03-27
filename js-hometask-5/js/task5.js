class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary with experience: ${salary}`);
        return salary;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.3;

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.4;

let workers = [worker1, worker2, worker3];

workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

for (let worker of workers) {
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
}
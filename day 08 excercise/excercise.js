// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept

class Employee {
  //pass
  Salary = 30000;
  workinghour_a_day = Number;
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  add_working_hour_per_day(h) {
    //pass
    this.workinghour_a_day = Number(h);
  }
  total_salary() {
    //pass
    return this.workinghour_a_day * 30 * this.Salary;
  }
}

class FulltimeEmployee extends Employee {
  workinghour_a_day;
  constructor(name, age) {
    super(name, age);
  }
  total_salary() {
    if (this.workinghour_a_day > 6) {
      return (this.workinghour_a_day * 30 * 75000).toLocaleString("id-ID");
    } else {
      return (this.workinghour_a_day * 30 * 100000).toLocaleString("id-ID");
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name, age) {
    super(name, age);
  }
  total_salary() {
    if (this.workinghour_a_day > 6)
      return (this.workinghour_a_day * 30 * 30000).toLocaleString("id-ID");
    else return (this.workinghour_a_day * 30 * 50000).toLocaleString("id-ID");
  }
}

ale = new FulltimeEmployee("Ale", 39);
ale.add_working_hour_per_day(7);
anjos = new FulltimeEmployee("Anjos", 48);
anjos.add_working_hour_per_day(6);
bombom = new ParttimeEmployee("Bombom", 36);
bombom.add_working_hour_per_day(5);
aris = new ParttimeEmployee("Aris", 49);
aris.add_working_hour_per_day(8);

console.log(ale.total_salary());
console.log(anjos.total_salary());
console.log(bombom.total_salary());
console.log(aris.total_salary());

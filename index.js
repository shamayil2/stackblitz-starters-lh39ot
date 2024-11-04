// run `node index.js` in the terminal
const students = [
  { name: 'Rahul', rollNo: 101, hindi: 80, english: 75, maths: 90 },
  { name: 'Amit', rollNo: 102, hindi: 85, english: 70, maths: 95 },
  { name: 'Priya', rollNo: 103, hindi: 78, english: 92, maths: 87 },
];

const marksForComputer = [88, 92, 95];
for (let i = 0; i < students.length; i++) {
  students[i].computer = marksForComputer[i];
}
console.log('1.1: Students Data with Computer Marks');
for (let i = 0; i < students.length; i++) {
  console.log(
    `Name:${students[i].name},Roll No:${students[i].rollNo},hindi:${students[i].hindi}`
  );
}

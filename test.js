// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];

// for (let i = 0; i < myAdmins.length; i++) {
//   console.log(myAdmins);
//   if (myAdmins[i] === "Stop") {
//     console.log(myAdmins[i]);
//     let adminsRow = `We have ${myAdmins.length}
//      our admins are ${myAdmins[i]}`

//     break;
//   }
// }
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let adminsCount = 0;

// Loop للـ Admins حتى الوصول إلى "Stop"
let output = ``;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    adminsCount = i;
    output += `<h1>we have ${adminsCount} admins</h1>
    // طباعة النتيجة النهائية لكل أدمن وموظفيه
    
    `;
    break; // إنهاء التكرار عند "Stop"
  }

  // تعريف المتغير الذي سيحمل موظفي كل أدمن

  let employeesList = [];
  // Loop للموظفين وشرط الحرف الأول
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      // تحقق من الحرف الأول
      employeesList.push(myEmployees[j]); // إضافة الموظف لقائمة الأدمن
      output += `<div>Admin: ${
        myAdmins[i]
      }, and he's Employees: [${employeesList.join(" - ")}]</div> <hr/>`;
    }
  }
}
document.write(output);

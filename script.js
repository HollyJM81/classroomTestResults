const classNames = ["Andy Aitken", "Briony Butter", "Clothilde Clipper", "Danny Devito", "Eve Evergreen", "Frankie Frup", "Gemma Gel", "Holly Hobby", "Isaac Ives", "Jack Jamieson", "Klaus Klinger", "Lucy Lander", "Madeleine Mathieson", "Nolan Noggin", "Oswald O'Connor", "Petra Poppet"];
let results = []; //push new "student" objects to this array
let nameArr = [];
let student = {};

//this function separates a string into first and last names into a usable array
let nameSplitter = (str) => str.split(" ");


//this function creates a new student Object
let newStudent = (arr) => {
    let addStudent = {};
    student.firstName = arr[0]; 
    student.lastName = arr[1];
    return addStudent;
}

//this function pushes the new student to the classresults array
function splitStudents2(arr) {
    for (let i of arr) {
    nameArr = nameSplitter(i);
    console.log(nameArr);
    student = newStudent(nameArr);
    results.push(student);
}
    return results;
}

//this function searches for existing student in results array, and adds subject: grade key value pairs
function addSubjectGrade(arr, name, subject, grade) {
    for (let i in arr) {
    if (Object.values(arr[i]).includes(name)) {
        return arr[i][subject] = grade;
    }
}

}

           
     
        


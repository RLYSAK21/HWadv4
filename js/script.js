// Data
const student = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [ "Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних",];
const marks = [4, 5, 5, 3, 4, 5];

// Dividing pople into pairs
function getPeopleInPairs (student) {
    
    const women = [];
    const men = [];
    
    for (let person of student) {
      if (person.endsWith("а") || person.endsWith("я")) {
        women.push(person);
      } else {
        men.push(person);
      }
    }
    console.log("Чоловіки", men);
    console.log("Жінки", women); 
    
    const ourPairs = [];
    
    for (let i = 0; i < men.length; i++) {
        ourPairs.push([men[i], women[i]]);
      } 
     return ourPairs; 
    
}
const arrayPeopleinPairs = getPeopleInPairs (student);

// Pairs with themes 
function addPairsWithThemes (arrayPeopleinPairs, themes) {

    const pairsWithThemes = [];
  
    for (let i = 0; i < arrayPeopleinPairs.length; i++) {
      let stringPairs = arrayPeopleinPairs[i].join(" та ");
      pairsWithThemes.push([stringPairs," тема - ", themes[i]]);
    }
    return pairsWithThemes;
}

  const arrayPairsWithThemes = addPairsWithThemes(arrayPeopleinPairs, themes);
  console.log("Пари + тема: ", arrayPairsWithThemes);

//get mark for student

function addMarksToStudents(student, marks){

    const arrayMarkStu = [];
  
    for (let i = 0; i < student.length; i++) {
  
      arrayMarkStu.push([student[i],"оцінка -", marks[i]]);
  
    }
  
    return arrayMarkStu;
  
  };
  
  const arrayMarkForStudednts = addMarksToStudents(student, marks);
  console.log(arrayMarkForStudednts [0]);
//get mark for group

function GetMarksCommand(arrayPairsWithThemes){
    const coppyArray = JSON.parse(JSON.stringify(arrayPairsWithThemes));
    
    console.log("Зкопійована ", coppyArray);
    
    for (let i = 0; i < arrayPairsWithThemes.length; i++) {
         function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;}
         coppyArray[i].push(" оцінка- ",getRandomInt(1, 5) );
    }

return coppyArray;
    };
  const arrayCommandMark = GetMarksCommand(arrayPairsWithThemes);
console.log("Зкопійована2 ", arrayCommandMark);

document.write("Наші команди: ","</br>");
document.write("Команда 1: ", arrayPeopleinPairs[0] , ";", "</br>");
document.write("Команда 2: ", arrayPeopleinPairs[1] , ";", "</br>");
document.write("Команда 3: ", arrayPeopleinPairs[2] , ".", "</br>");
document.writeln("</br>");
document.write("Наші команда  з темами: ",  "</br>");
document.write("Команда 1: ", arrayPairsWithThemes[0] , ";", "</br>");
document.write("Команда 2: ", arrayPairsWithThemes[1] , ";", "</br>");
document.write("Команда 3: ", arrayPairsWithThemes[2] , ".", "</br>");
document.writeln("</br>");
document.writeln("Студенти та оцінка: ",  "</br>");
document.write("Студент: ", arrayMarkForStudednts[0] , ";", "</br>");
document.write("Студент: ", arrayMarkForStudednts[1] , ";", "</br>");
document.write("Студент: ", arrayMarkForStudednts[2] , ";", "</br>");
document.write("Студент: ", arrayMarkForStudednts[3] , ";", "</br>");
document.write("Студент: ", arrayMarkForStudednts[4] , ";", "</br>");
document.write("Студент: ", arrayMarkForStudednts[5] , ".", "</br>");
document.writeln("</br>");
document.write("Команда та їхня оцінка: ", "</br>");
document.write("Команда 1: ", arrayCommandMark[0] , ";", "</br>");
document.write("Команда 2: ", arrayCommandMark[1] , ";", "</br>");
document.write("Команда 3: ", arrayCommandMark[2] , ".", "</br>");
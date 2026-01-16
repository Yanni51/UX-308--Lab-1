let nGrade = 75; 
let letterGrade = "";
//select among letter grades
if(nGrade < 50){
    letterGrade= "you failed"
}else if(nGrade >= 90){
    letterGrade="A+";
}else{
    letterGrade= "you passed";

}


console.log(letterGrade)

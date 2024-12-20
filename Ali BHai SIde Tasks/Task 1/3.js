function getGrade(score) {
    if (score >= 90 && score <= 100) return 'A';
    if (score >= 75 && score < 90) return 'B';
    if (score >= 60 && score < 75) return 'C';
    if (score >= 50 && score < 60) return 'D';
    if (score >= 35 && score < 50) return 'E';
    return 'Fail';
}

let score = parseFloat(prompt("Enter the score: "));


if (score < 0 || score > 100) {
    console.log("Please enter a valid score between 0 and 100");
} else {
    let grade = getGrade(score);


    console.log(grade);
}
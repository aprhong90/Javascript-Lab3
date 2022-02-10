"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
//2
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

addSubmission(submissions, "April", 90, "2020-09-13");

console.log(submissions);

//3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

//4
const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });

  array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "April");
// console.log(submissions);

//5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 1, 50);

console.log(submissions);

//6
const findSubmissionByName = (array, name) => {
  const found = array.find((item) => {
    return item.name === name;
  });
  return found;
};
console.log(findSubmissionByName(submissions, "Jill"));

//7 coundn't figure out how to solve this ;(
const findLowestScore = (array) => {
  let i = 0;
  let currentLowest = array[i].score;
  array.forEach((item) => {
    currentLowest < item.score;
    i++;
  });
  return currentLowest;
};

console.log(findLowestScore(submissions));

//8
const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

//9
const filterPassing = (array) => {
  const passingScores = array.filter((item) => {
    return item.passed;
  });
  return passingScores;
};

console.log(filterPassing(submissions));

//10
const filter90AndAbove = (array) => {
  const greatScore = array.filter((item) => {
    return item.score >= 90;
  });
  return greatScore;
};
console.log(filter90AndAbove(submissions));

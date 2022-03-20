const inputBtn = document.getElementById("btn");
const myText = document.getElementById("myText");
const answer = document.getElementById("answer");
const evenNumsRadioBtn = document.getElementById("evenNums");
const totalNumsRadioBtn = document.getElementById("totalNums");

function evenNums(value) {
  return value % 2 === 0;
}

function doFilter(arr) {
  return arr.map(Number).filter(evenNums); //use number a function
}

function doSum(arr) {
  const newNumbers = arr.map(Number);
  return newNumbers.reduce(addNumbers);
}

function addNumbers(total, num) {
  return total + num;
}

inputBtn.addEventListener("click", function () {
  let result;
  const inputArr = myText.value.split(",");
  //console.log(inputArr);
  if (evenNumsRadioBtn.checked) {
    result = doFilter(inputArr).join(", ");

    answer.textContent = result;
  } else if (totalNumsRadioBtn.checked) {
    result = doSum(inputArr);

    answer.textContent = result;
  } else {
    alert("Please make a selection");
  }
});

// line 35 / 41 need to be on one line ///

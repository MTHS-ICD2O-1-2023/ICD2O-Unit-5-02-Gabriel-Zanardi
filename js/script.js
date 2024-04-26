// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Apr 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  positiveChecked = document.getElementById('positive-number').checked
  negativeChecked = document.getElementById('negative-number').checked

const randomNumber = Math.floor(Math.random() * 9) + 1 

  if (positiveChecked == true) {
    document.getElementById("number-answer").innerHTML = randomNumber
  } else {
    document.getElementById("number-answer").innerHTML = (randomNumber * -1)
  }
}

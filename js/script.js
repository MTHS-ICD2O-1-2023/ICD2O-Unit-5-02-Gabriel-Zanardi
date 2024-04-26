// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Apr 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random()) 

/**
 * This function checks if thge user has selected the random number from above
 */

function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("positive-option").innerHTML =
      "<p>Value is: On</p>"
  } else {
    document.getElementById("negative-option").innerHTML =
      "<p>Value is: Off</p>"
  }
}

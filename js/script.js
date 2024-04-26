// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Apr 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: On</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: Off</p>"
  }
}

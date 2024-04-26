// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Apr 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random()) 

function myButtonClicked() {
 alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("random-number").innerHTML = "<p>Value is: " + randomNumber + "</p>";

  } else {
    document.getElementById("random-number").innerHTML = "<p>Value is: " + randomNumber + "</p>";
  }
}

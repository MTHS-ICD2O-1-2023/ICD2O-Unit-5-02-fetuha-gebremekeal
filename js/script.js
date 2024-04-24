// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function alwaysChecked() {
  const optionPositive = (document.getElementById("option-positive").checked)

  if (optionPositive == true) {
    const pRand = Math.floor(Math.random() * 6) + 1
    document.getElementById("result").innerHTML = "Your number is: " + pRand
  } else {
    const nRand = Math.floor(Math.random() * 6) + 1
    document.getElementById("result").innerHTML = "Your number is: " + nRand
  }
}

"use strict";

const $ = require("jquery");
const fetchCurrentUser = require("./fetch_current_user.js");

$("#button").click(() => {
  fetchCurrentUser((user) => {
    const loggedText = "Logged " + (user.loggedIn ? "In" : "Out");
    $("#username").text(user.fullName + " - " + loggedText);
  });
});

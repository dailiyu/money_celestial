"use strict";
const convertTime = (timeStamp, format = "yyyy/MM/dd hh:mm:ss") => {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  return format.replace("yyyy", year).replace("MM", month).replace("dd", day).replace("hh", hours).replace("mm", minutes).replace("ss", seconds);
};
const obscureString = (input) => {
  if (input.length <= 15) {
    return input;
  }
  const start = input.slice(0, 8);
  const end = input.slice(-7);
  const obscured = start + "******" + end;
  return obscured;
};
exports.convertTime = convertTime;
exports.obscureString = obscureString;

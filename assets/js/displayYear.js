// Date
function updateDate() {
  let todayDate = new Date();

  // return number
  let year = todayDate.getFullYear();
  document.getElementById("year").firstChild.nodeValue = year;
}

updateDate();
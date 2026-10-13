(function () {
  document.querySelector("#ex1_button").addEventListener("click", function () {
    let content = document.querySelector("#ex1_content");
    content.textContent = "";
    for (let i = 0; i <= 9; i++) {
      content.textContent += i;
      if (i != 9) content.textContent += ",";
    }
  });
})();

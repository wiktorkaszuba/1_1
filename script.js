(function () {
  document.querySelector("#ex1_button").addEventListener("click", function () {
    let content = document.querySelector("#ex1_content");
    content.textContent = "";
    for (let i = 0; i <= 9; i++) {
      content.textContent += i;
      if (i != 9) content.textContent += ",";
    }
  });
  let ex2text = document.querySelector("#ex2_text");
  ex2text.addEventListener("input", function () {
    let content = document.querySelector("#ex2_content");
    content.textContent = "";
    if (ex2text.value.length != 9) {
      content.textContent = "Długość numeru musi być równa 9";
      return;
    }
    if (/[a-zA-Z]/.test(ex2text.value)) {
      content.textContent = "Numer nie może zawierać liter";
      return;
    }
    if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(ex2text.value)) {
      content.textContent = "Numer nie może zawierać znaków specjalnych";
      return;
    }
    if (ex2text.value.length == 9)
      content.textContent = "Numer telefonu jest poprawny";
    console.log("a");
  });
})();

function passVisi() {
  const show = document.querySelector("#show-pass");
  const hidden = document.querySelector("#hidden-pass");
  const inputPass = document.querySelector("#pass-word");

  if (inputPass.type === "password") {
    inputPass.type = "text";
    show.style.display = "none";
    hidden.style.display = "inline-block";
  } else {
    inputPass.type = "password";
    show.style.display = "inline-block";
    hidden.style.display = "none";
  }
}
function passVisi2() {
    const show = document.querySelector("#show-pass2");
    const hidden = document.querySelector("#hidden-pass2");
    const inputPass = document.querySelector("#pass-word2");
  
    if (inputPass.type === "password") {
      inputPass.type = "text";
      show.style.display = "none";
      hidden.style.display = "inline-block";
    } else {
      inputPass.type = "password";
      show.style.display = "inline-block";
      hidden.style.display = "none";
    }
  }
;

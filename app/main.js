const form = document.getElementById("form-data");
const message = document.querySelector(".message");
const loader = document.querySelector(".loader");
const video = document.querySelector("#video");
const video1 = document.querySelector("#video-one");
const click = document.querySelector("#audio-click");

console.log(loader);
form.onsubmit = (e) => {
  e.preventDefault();
  click.play();
  const form_data = new FormData(e.target);
  const value = Object.fromEntries(form_data);

  loader.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";
    if (!value.subject || !value.mark) {
      message.innerHTML = createAlert("all fields are required");
    } else {
      const { gpa, grade } = getResult(value.mark);

      if (grade === "F") {
        video1.style.display = "block";
        video1.play();
      } else {
        video.style.display = "block";
        video.play();
      }

      message.innerHTML = createAlert(
        `Subject : ${value.subject} <br> GPA : ${gpa} <br> GRADE : ${grade}`,
        "info"
      );
    }
    e.target.reset();
  }, 3000);
};

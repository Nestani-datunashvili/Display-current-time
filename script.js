const hrs = document.getElementById(`hrs`);
const min = document.getElementById(`min`);
const sec = document.getElementById(`sec`);

setInterval(() => {
  let currentTime = new Date();

  hrs.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

const downloadBtn = document.querySelector(".download-btn");
const fileLink =
  "../Abstract-Template.docx";

const initTimer = () => {
  if (downloadBtn.classList.contains("disable-timer")) {
    return (location.href = fileLink);
  }
  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add("timer");
  downloadBtn.innerHTML = `Starting Download!!`;
  const initCounter = setInterval(() => {
    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.innerText = "Download complete!!";
    setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable-timer");
      downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
    }, 3000);
  }, 1000);
};

downloadBtn.addEventListener("click", initTimer);

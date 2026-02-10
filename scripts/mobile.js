document.addEventListener("DOMContentLoaded", () => {
  const warning = document.getElementById("screen-warning");
  const btn = document.getElementById("continue-btn");

  if (!warning || !btn) {
    console.error("Screen warning elements missing");
    return;
  }

  const ua = navigator.userAgent.toLowerCase();

  const isPhone =
    (
      ua.includes("android") ||
      ua.includes("iphone") ||
      ua.includes("ipod")
    ) &&
    navigator.maxTouchPoints >= 4 &&
    screen.orientation !== undefined;

  if (isPhone) {
    warning.style.display = "flex";
    document.body.classList.add("warning-open");
  }

  btn.onclick = () => {
    warning.style.display = "none";
    document.body.classList.remove("warning-open");
  };
});

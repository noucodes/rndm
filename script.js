document.getElementById("loadButton").addEventListener("click", () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.getElementById('contentDiv').style.display = "none";
    clearTimeout(c);
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  var select = document.getElementById("year-select");
  var panels = document.querySelectorAll(".history-year");

  function showYear(year) {
    panels.forEach(function (panel) {
      panel.classList.toggle("active", panel.dataset.year === year);
    });
  }

  select.addEventListener("change", function () {
    showYear(this.value);
  });

  showYear(select.value);
});

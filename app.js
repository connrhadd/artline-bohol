window.addEventListener("scroll", function () {
  var header = document.querySelector("banner-home");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById("open-modal-btn").addEventListener("click", function () {
  document.getElementById("modal-order").classList.add("is-open")
})
document.getElementById("close-modal-btn").addEventListener("click", function () {
  document.getElementById("modal-order").classList.remove("is-open")
})

document.getElementById("open-modal-mobile-btn").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("is-open");
})
document.getElementById("close-modal-icon-btn").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("is-open");
})

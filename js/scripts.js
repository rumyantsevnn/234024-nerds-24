var write_us_link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

write_us_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });

let accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((items, index) => {
  let header = items.querySelector("header");
  header.addEventListener("click", () => {
    items.classList.toggle("open");
    let desc = items.querySelector("p");
    if (items.classList.contains("open")) {
      desc.style.display = "block";
      items.querySelector("header img").src = "assets/images/icon-minus.svg";
    } else {
      desc.style.display = "none";
      items.querySelector("header img").src = "assets/images/icon-plus.svg";
    }
  });
});

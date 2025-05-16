const listEl = document.querySelectorAll("#categories > .item");
console.log(`Nuber of categories ${listEl.length}`);
listEl.forEach((element) => {
  const category = element.querySelector(".title").textContent;
  console.log(`category ${category}`);
  const navEl = element.querySelectorAll(".item");
  console.log(`elements ${navEl.length}`);
});


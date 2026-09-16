const refs = {
  categories: document.querySelector("#categories"),
  listItems: document.querySelectorAll(".item"),
};

console.log("Number of categories:", refs.listItems.length);

refs.listItems.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);

  console.log("Elements", item.querySelectorAll("li").length);
});

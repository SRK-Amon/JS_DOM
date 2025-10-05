alert("Сночала нажмите на цвет а потом можете игратся с фигурками :)")

const btns = document.querySelectorAll(".btn");
const figures = document.querySelectorAll(".btn_figure");
const dom_items = document.querySelectorAll(".dom_item");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;

    dom_items.forEach((dom_item) => {
      dom_item.style.backgroundColor = color;
    });
  });
});
figures.forEach((figure) => {
  figure.addEventListener("click", () => {
    const style = figure.dataset.figure;
    dom_items.forEach((dom_item) => {
      dom_item.classList.remove(
        "triangle",
        "hexagon",
        "pentagon",
        "star",
        "square"
      );
      dom_item.classList.add(`${style}`);
    });
  });
});

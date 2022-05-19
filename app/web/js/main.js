const ItemSelectOption = () => {
  const ultIdentify = document.getElementById("select-content");
  ultIdentify.addEventListener("click", (e) => {
    let option = e.target.dataset.option;
    ItemCollapseOption(option);
  });
};

const ItemCollapseOption = (paramrel) => {
  const reloption = document.querySelector(`[data-reloption="${paramrel}"]`);
  reloption.classList.toggle("h-0");
  reloption.classList.toggle("p-5");
};

/* declarate */
ItemSelectOption();
ItemCollapseOption();

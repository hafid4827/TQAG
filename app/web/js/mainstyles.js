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

/* click events add dave forms */
const EventAddrouterBasic = (formName) => {
  const captionFormData = document.getElementById(formName);
  captionFormData.addEventListener("submit", (e) => {
    e.preventDefault();
    return Object.fromEntries(new FormData(e.target));
  });
};

/* const probando = async () => {
  let guardamos = await eel.suma("((1+2+3+4+5+6)*2)/20")();
  console.log(guardamos);
}; */
/* declarate */
EventAddrouterBasic();
ItemSelectOption();
ItemCollapseOption();

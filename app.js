const checkboxes = document.querySelectorAll("input");

let targets = [];

function handleClick(e) {
    if (this.checked) targets.push(e.target);
}

function handleShift(e) {
  if (e.shiftKey) {
    targets.push(e.target);
    const start = targets[0].id;
    const end = targets[1].id;
    for (let i = Math.min(start, end); i < Math.max(start, end); i++) {
      checkboxes[i].checked = true;
    }
  }
  targets = [];
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleShift);
  checkbox.addEventListener("click", handleClick);
});


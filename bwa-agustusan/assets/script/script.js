function changehover(e) {
  let parent = e.parentNode;
  if (!e.classList.contains("col-4")) {
    parent.childNodes[3].className = "col-2";
    parent.childNodes[5].className = "col-2";
    parent.childNodes[7].className = "col-2";
    e.className = "col-4";
  }
}

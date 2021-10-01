export function makeDraggable(element: HTMLElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const headerElement = document.getElementById(`${element.id}_header`);
  if (headerElement) {
    // if present, the header is where you move the DIV from
    headerElement.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV
    element.onmousedown = dragMouseDown;
  }
  
  function dragMouseDown(event: MouseEvent): void {
    const e = event ?? window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = stopDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = startDragElement;
  }
  
  function startDragElement(event: MouseEvent): void {
    const e = event ?? window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }
  
  function stopDragElement(): void {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
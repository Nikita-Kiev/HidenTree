let tree = document.getElementsByTagName('ul')[0];

let treeBranch = tree.getElementsByTagName('li');
for(let i = 0; i < treeBranch.length; i++) {
  let someBranch = treeBranch[i];

  let hideBranch = document.createElement('hideBranch');
  someBranch.insertBefore(hideBranch, someBranch.firstChild);
  hideBranch.appendChild(hideBranch.nextSibling);
}

tree.onclick = (event) => {
  let hidenElement = event.target.parentNode.getElementsByTagName('ul')[0];
  if (!hidenElement) return;
  hidenElement.hidden = !hidenElement.hidden;
}

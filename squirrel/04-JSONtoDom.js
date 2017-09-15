let data = {
  tag: "div",
  attributes: [
    {
      name: "attr1",
      value: "val1"
    }
  ],
  children: [
    "Whoa I'm text",
    {
      tag: "p",
      attributes: [
        {
          name: "attr2",
          value: "val2"
        }
      ],
      children: [
        { tag: "figure" }
      ]
     }
   ]
 };

let container = document.createElement('div');

const deserializeJSON = (data, parent) => {

  let tag = data['tag'];
  let attrArray = data['attributes'];
  let childrenArray = data['children'];

  let element = document.createElement(tag);

  for(let i = 0; i < attrArray.length; i++) {
    element.setAttribute(attrArray[i]['name'], attrArray[i]['value']);
  }

  if(parent) {
    parent.appendChild(element);
  }else {
    container.appendChild(element);
  }
  
  for(let j = 0; j < childrenArray.length; j++) {
    if(typeof childrenArray[j] === String) {
      elment.innerText = childrenArray[j];
    }else {
      element.appendChild(element);
      deserializeJSON(childrenArray[j], element);
    }

}

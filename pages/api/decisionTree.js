const subjectInput = document.getElementById("subject-input");
const decisionTreeSelect = document.getElementById("decision-tree-select");

decisionTreeSelect.addEventListener("change", function() {
  const selectedOption = decisionTreeSelect.value;

  switch (selectedOption) {
    case "Option 1":
      decisionTreeSelect.innerHTML = `
        <option value="Option 1-1">Option 1-1</option>
        <option value="Option 1-2">Option 1-2</option>
      `;
      break;
    case "Option 2":
      decisionTreeSelect.innerHTML = `
        <option value="Option 2-1">Option 2-1</option>
        <option value="Option 2-2">Option 2-2</option>
      `;
      break;
    case "Option 3":
      decisionTreeSelect.innerHTML = `
        <option value="Option 3-1">Option 3-1</option>
        <option value="Option 3-2">Option 3-2</option>
      `;
      break;
    default:
      break;
  }
});

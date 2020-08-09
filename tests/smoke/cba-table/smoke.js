const cbaTable = document.querySelector("cba-table");
const items = [];

items.push({
  id: "first-item",
  arguments: ["Please enter a long text here", "Value"],
  type: "Event"
});

for (let index = 0; index < 30; index++) {
  items.push({
    id: "row" + index,
    data: "Info",
    arguments: ["Data" + index, "Value" + index],
    type: "Event" + index,
  });
}

cbaTable.items = items;
cbaTable.selectRow("row0");

document.querySelector("#add-row").addEventListener("click", () =>
{
  const num = cbaTable.items.length + 1;
  cbaTable.addRow({
    data: "Info",
    arguments: [`Data${num}`, `Value${num}`],
    type: `Event${num}`
  });
});

onSelected();
cbaTable.addEventListener("select", onSelected);

function onSelected()
{
  const item = cbaTable.getSelectedItem();
  document.querySelector("input[name='arg0']").value = item.arguments[0];
  document.querySelector("input[name='arg1']").value = item.arguments[1];
  document.querySelector("input[name='type']").value = item.type;
}

document.querySelector("#delete-row").addEventListener("click", () =>
{
  cbaTable.deleteRow(cbaTable.getSelectedItem().id);
});

document.querySelector("#update-row").addEventListener("click", () =>
{
  const row = cbaTable.getSelectedItem();
  row.arguments[0] = document.querySelector("input[name='arg0']").value;
  row.arguments[1] = document.querySelector("input[name='arg1']").value;
  row.type = document.querySelector("input[name='type']").value;
  cbaTable.updateRow(row);
});

const table = document.querySelector(".table");
window.addEventListener("keydown", (e) => {
  table.innerHTML = `
<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>`;
});
document.querySelector('#refresh').addEventListener('click', function(){
    table.innerHTML = "";
});

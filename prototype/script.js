const foodForm = document.getElementById('foodForm');
const foodTableBody = document.getElementById('foodTableBody');

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

foodForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const foodName = document.getElementById('foodName').value.trim();
  const quantity = document.getElementById('quantity').value.trim();
  const mealType = document.getElementById('mealType').value;

  if (!foodName || !quantity) {
    return;
  }

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${foodName}</td>
    <td>${quantity}</td>
    <td>${mealType}</td>
    <td>${formatTime(new Date())}</td>
  `;

  foodTableBody.prepend(row);
  foodForm.reset();
});

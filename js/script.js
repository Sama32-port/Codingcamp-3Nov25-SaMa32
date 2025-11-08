document.getElementById('guestForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const tanggal = document.getElementById('tanggal').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const kelas = document.getElementById('kelas').value;
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !tanggal || !gender || !kelas)
    return alert("Lengkapi semua field wajib!");

  const tableBody = document.querySelector('#guestTable tbody');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${nama}</td>
    <td>${tanggal}</td>
    <td>${gender}</td>
    <td>${kelas}</td>
    <td>${pesan}</td>
    <td><button class="delete-btn" title="Hapus">&#128465;</button></td>
  `;

  tableBody.appendChild(row);

  document.getElementById('guestForm').reset();

  row.querySelector('.delete-btn').addEventListener('click', () => row.remove());
});

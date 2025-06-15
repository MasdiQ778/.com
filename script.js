
document.addEventListener("DOMContentLoaded", () => {
  const produk = document.getElementById("produk");
  fetch("https://bukaolshop.com/api/list_produk")
    .then(res => res.json())
    .then(data => {
      produk.innerHTML = "";
      data.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.kode;
        opt.textContent = p.nama;
        produk.appendChild(opt);
      });
    })
    .catch(() => {
      produk.innerHTML = "<option>Gagal memuat produk</option>";
    });

  document.getElementById("submit").addEventListener("click", () => {
    alert("Pesanan dikirim!");
  });
});

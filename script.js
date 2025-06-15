const API_PRODUK = "https://bukaolshop.com/api/list_produk"; // Ganti jika endpoint berbeda
const API_ORDER = "https://bukaolshop.com/api/kirim_pesanan"; // Endpoint kirim pesanan

const productSelect = document.getElementById("product");
const orderForm = document.getElementById("orderForm");
const resultBox = document.getElementById("result");

async function loadProduk() {
  try {
    const res = await fetch(API_PRODUK);
    const data = await res.json();

    productSelect.innerHTML = "";
    data.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.kode;
      opt.textContent = `${item.nama} - Rp${item.harga}`;
      productSelect.appendChild(opt);
    });
  } catch (e) {
    productSelect.innerHTML = "<option>Gagal memuat produk</option>";
    console.error("Gagal ambil produk:", e);
  }
}

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const kode = productSelect.value;
  const userId = document.getElementById("userId").value;
  const metode = document.getElementById("metode").value;

  resultBox.textContent = "Mengirim pesanan...";

  try {
    const res = await fetch(API_ORDER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kode_produk: kode,
        user_id: userId,
        metode: metode,
      }),
    });

    const result = await res.json();
    if (result.status === "success") {
      resultBox.textContent = "✅ Pesanan berhasil dikirim!";
    } else {
      resultBox.textContent = `❌ Gagal: ${result.message || 'Terjadi kesalahan'}`;
    }
  } catch (e) {
    resultBox.textContent = "❌ Terjadi kesalahan koneksi.";
    console.error(e);
  }
});

loadProduk();

<form method="post" enctype="multipart/form-data" action="https://bukaolshop.com/upload-produk.php">
    <label>Nama Produk
        <input type="text" name="nama_produk" required>
    </label>
    <label>Harga
        <input type="number" name="harga" required>
    </label>
    <label>Kode Produk
        <input type="text" name="kode_produk" required>
    </label>
    <label>Keterangan
        <textarea name="keterangan" rows="3"></textarea>
    </label>
    <label>Gambar Produk
        <input type="file" name="gambar" accept="image/*" required>
    </label>
    <button type="submit">Upload</button>
</form>

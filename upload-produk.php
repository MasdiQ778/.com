<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama_produk = $_POST['nama_produk'] ?? '';
    $harga = $_POST['harga'] ?? '';
    $kode_produk = $_POST['kode_produk'] ?? '';
    $keterangan = $_POST['keterangan'] ?? '';
    $gambar = $_FILES['gambar'] ?? null;

    if ($nama_produk && $harga && $kode_produk && $gambar && $gambar['error'] === 0) {
        $uploads_dir = __DIR__ . '/uploads';
        if (!is_dir($uploads_dir)) mkdir($uploads_dir);

        $filename = uniqid('img_') . '-' . basename($gambar['name']);
        $target_path = "$uploads_dir/$filename";

        if (move_uploaded_file($gambar['tmp_name'], $target_path)) {
            // Simpan data ke database atau file
            // Contoh simpan ke file
            $data = [
                'nama_produk' => $nama_produk,
                'harga' => $harga,
                'kode_produk' => $kode_produk,
                'keterangan' => $keterangan,
                'gambar' => $filename
            ];
            file_put_contents("$uploads_dir/data.txt", json_encode($data) . PHP_EOL, FILE_APPEND);
            echo "Produk berhasil diupload!";
        } else {
            echo "Gagal upload gambar.";
        }
    } else {
        echo "Semua field wajib diisi dan gambar harus dipilih.";
    }
}
?>
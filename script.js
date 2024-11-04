// Array untuk menyimpan data pesanan
let daftarPesanan = [];

// Fungsi untuk menambahkan pesanan baru
function tambahPesanan() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const paket = document.getElementById("paket").value;

    if (nama && email && paket) {
        const pesanan = { id: Date.now(), nama, email, paket };
        daftarPesanan.push(pesanan);
        tampilkanPesanan();
        document.getElementById("formPemesanan").reset();
    } else {
        alert("Harap isi semua data!");
    }
}

// Fungsi untuk menampilkan daftar pesanan
function tampilkanPesanan() {
    const daftarPesananEl = document.getElementById("daftarPesanan");
    daftarPesananEl.innerHTML = "";

    daftarPesanan.forEach((pesanan) => {
        const item = document.createElement("li");
        item.innerHTML = `
            ${pesanan.nama} - ${pesanan.email} - ${pesanan.paket}
            <button onclick="editPesanan(${pesanan.id})">Edit</button>
            <button onclick="hapusPesanan(${pesanan.id})">Hapus</button>
        `;
        daftarPesananEl.appendChild(item);
    });
}

// Fungsi untuk menghapus pesanan
function hapusPesanan(id) {
    daftarPesanan = daftarPesanan.filter((pesanan) => pesanan.id !== id);
    tampilkanPesanan();
}

// Fungsi untuk mengedit pesanan
function editPesanan(id) {
    const pesanan = daftarPesanan.find((pesanan) => pesanan.id === id);
    if (pesanan) {
        document.getElementById("nama").value = pesanan.nama;
        document.getElementById("email").value = pesanan.email;
        document.getElementById("paket").value = pesanan.paket;

        hapusPesanan(id);
    }
}

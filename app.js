// Mengambil elemen dari HTML
const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const pesan = document.getElementById("pesan");

const totalTugas = document.getElementById("totalTugas");
const tugasSelesai = document.getElementById("tugasSelesai");
const tugasBelumSelesai = document.getElementById("tugasBelumSelesai");


// Fungsi untuk menambahkan tugas
function tambahTugas() {

    const teksTugas = inputTugas.value.trim();

    // Validasi input kosong
    if (teksTugas === "") {
        pesan.textContent = "Tugas tidak boleh kosong!";
        return;
    }

    // Menghapus pesan jika input sudah benar
    pesan.textContent = "";

    // Membuat elemen list
    const itemTugas = document.createElement("li");
    itemTugas.className = "item-tugas";

    // Membuat teks tugas
    const teks = document.createElement("span");
    teks.textContent = teksTugas;

    // Menandai tugas selesai ketika teks diklik
    teks.addEventListener("click", function() {
        teks.classList.toggle("completed");
        updateStatistik();
    });

    // Membuat tombol hapus
    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.className = "btn-hapus";

    // Menghapus tugas
    btnHapus.addEventListener("click", function() {
        itemTugas.remove();
        updateStatistik();
    });

    // Memasukkan teks dan tombol ke dalam list
    itemTugas.appendChild(teks);
    itemTugas.appendChild(btnHapus);

    // Memasukkan list ke halaman
    daftarTugas.appendChild(itemTugas);

    // Mengosongkan input
    inputTugas.value = "";
    inputTugas.focus();

    // Memperbarui statistik
    updateStatistik();
}


// Fungsi untuk memperbarui statistik
function updateStatistik() {

    const semuaTugas = document.querySelectorAll(".item-tugas");
    const tugasYangSelesai = document.querySelectorAll(".completed");

    const total = semuaTugas.length;
    const selesai = tugasYangSelesai.length;
    const belumSelesai = total - selesai;

    totalTugas.textContent = total;
    tugasSelesai.textContent = selesai;
    tugasBelumSelesai.textContent = belumSelesai;
}


// Tombol Tambah
btnTambah.addEventListener("click", function() {
    tambahTugas();
});


// Tombol Enter pada input
inputTugas.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        tambahTugas();
    }

});
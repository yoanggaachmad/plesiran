<?php

//Inisiasi nilai-nilai paramater koneksi
$namaServer = "localhost"; // isikan sesuai nama server Anda
$namaPengguna = "root"; //isikan sesuai nama pengguna Basisdata Anda
$password = ""; //isikan sesuai password Anda
$nama_db = "plesiran";
//Membuat koneksi
$koneksi = new mysqli($namaServer, $namaPengguna, $password, $nama_db);
//memeriksa apakah koneksi sukses dilakukan
if ($koneksi->connect_error) {
	die("Koneksi gagal : " . $koneksi->connect_error. "<br>");
}
?>





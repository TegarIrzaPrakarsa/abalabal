<template>
    <div class="card">
      <h2>Data Mahasiswa</h2>
  
      <form @submit.prevent="tambahMahasiswa">
        <input v-model="mahasiswa.nama" placeholder="Nama Mahasiswa" required />
        <input v-model="mahasiswa.nim" placeholder="NIM" required />
        <input v-model="mahasiswa.prodi" placeholder="Program Studi" required />
        <button type="submit">Tambah</button>
      </form>
  
      <ul>
        <li v-for="mhs in daftarMahasiswa" :key="mhs.nim" class="list-item">
          {{ mhs.nama }} - {{ mhs.nim }} ({{ mhs.prodi }})
          <button @click="hapusMahasiswa(mhs.nim)">Hapus</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mahasiswa = ref({
    nama: '',
    nim: '',
    prodi: ''
  })
  
  const daftarMahasiswa = ref([])
  
  const tambahMahasiswa = () => {
    daftarMahasiswa.value.push({ ...mahasiswa.value })
    mahasiswa.value = { nama: '', nim: '', prodi: '' }
  }
  
  const hapusMahasiswa = (nim) => {
    daftarMahasiswa.value = daftarMahasiswa.value.filter(m => m.nim !== nim)
  }
  </script>
  
  <style scoped>
  .card {
    background: white;
    padding: 2rem;
    margin: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    width: 500px;
  }
  
  input {
    display: block;
    margin-bottom: 1rem;
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  button {
    padding: 8px 16px;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  
  .list-item {
    background: #f7f7f7;
    padding: 10px;
    margin: 8px 0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }
  </style>
  
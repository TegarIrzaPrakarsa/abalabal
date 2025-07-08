<template>
    <div class="card">
      <h2>Data Dosen</h2>
  
      <form @submit.prevent="tambahDosen">
        <input v-model="dosen.nama" placeholder="Nama Dosen" required />
        <input v-model="dosen.nip" placeholder="NIP" required />
        <input v-model="dosen.matakuliah" placeholder="Matakuliah Diampu" required />
        <button type="submit">Tambah</button>
      </form>
  
      <ul>
        <li v-for="d in daftarDosen" :key="d.nip" class="list-item">
          {{ d.nama }} - {{ d.nip }} ({{ d.matakuliah }})
          <button @click="hapusDosen(d.nip)">Hapus</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const dosen = ref({
    nama: '',
    nip: '',
    matakuliah: ''
  })
  
  const daftarDosen = ref([])
  
  const tambahDosen = () => {
    daftarDosen.value.push({ ...dosen.value })
    dosen.value = { nama: '', nip: '', matakuliah: '' }
  }
  
  const hapusDosen = (nip) => {
    daftarDosen.value = daftarDosen.value.filter(d => d.nip !== nip)
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
  
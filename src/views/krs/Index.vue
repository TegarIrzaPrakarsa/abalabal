<template>
    <div class="card">
      <h2>Pengisian KRS</h2>
  
      <div class="form-group">
        <input v-model="nim" placeholder="Masukkan NIM Mahasiswa" />
        <select v-model="selectedMatkul">
          <option disabled value="">Pilih Matakuliah</option>
          <option v-for="matkul in matakuliahList" :key="matkul.kode" :value="matkul">
            {{ matkul.nama }} ({{ matkul.sks }} SKS)
          </option>
        </select>
        <button @click="tambahKRS">Tambah KRS</button>
      </div>
  
      <div v-if="krsList.length" class="list">
        <div class="card-item" v-for="(item, index) in krsList" :key="index">
          <p><strong>{{ item.kode }}</strong> - {{ item.nama }} ({{ item.sks }} SKS)</p>
          <button @click="hapusKRS(index)">Hapus</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nim = ref('')
  const selectedMatkul = ref(null)
  const krsList = ref([])
  
  const matakuliahList = [
    { kode: 'MK01', nama: 'PEMROGRAMAN BERBASIS KOMPONEN', sks: 3 },
    { kode: 'MK02', nama: 'PEMROGRAMAN BERORIENTASI OBJEK', sks: 3 },
    { kode: 'MK03', nama: 'JARINGAN KOMPUTER', sks: 2 },
    { kode: 'MK04', nama: 'GRAFIKA KOMPUTER', sks: 3 },
    { kode: 'MK05', nama: 'ELEKTRONIKA DIGITAL', sks: 2 },
    { kode: 'MK06', nama: 'DESAIN ANALISIS ALGORITMA', sks: 3 },
    { kode: 'MK07', nama: 'MATEMATIKA DISKRIT', sks: 2 }
  ]
  
  const tambahKRS = () => {
    if (!nim.value || !selectedMatkul.value) return
  
    krsList.value.push({
      nim: nim.value,
      kode: selectedMatkul.value.kode,
      nama: selectedMatkul.value.nama,
      sks: selectedMatkul.value.sks,
      nilai: null
    })
  
    selectedMatkul.value = null
  }
  
  const hapusKRS = (index) => {
    krsList.value.splice(index, 1)
  }
  </script>
  
  <style scoped>
  .card {
    max-width: 600px;
    margin: auto;
    background: #fff;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 20px;
    color: #004085;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input, select {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px;
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #006666;
  }
  
  .list {
    margin-top: 20px;
  }
  
  .card-item {
    background: #f2f2f2;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  
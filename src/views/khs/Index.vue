<template>
    <div class="card">
      <h2>Input Nilai Mahasiswa</h2>
  
      <input v-model="nim" placeholder="Masukkan NIM" />
      <button @click="cariKRS">Cari Nilai Mahasiswa</button>
  
      <div v-if="krsData.length">
        <h3>Hasil KRS:</h3>
        <div
          v-for="(item, index) in krsData"
          :key="index"
          class="nilai-item"
        >
          <p><strong>{{ item.nama }}</strong></p>
          <select v-model="item.nilai">
            <option disabled value="">Pilih Nilai</option>
            <option>A</option>
            <option>A-</option>
            <option>B+</option>
            <option>B</option>
            <option>B-</option>
            <option>C+</option>
            <option>C</option>
          </select>
        </div>
        <button @click="simpanNilai">Simpan Nilai</button>
      </div>
  
      <p v-else>Belum ada data KRS untuk NIM tersebut.</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const nim = ref('')
  const krsData = ref([])
  
  const cariKRS = async () => {
    const res = await axios.get(`https://sistemakademik1.mockapi.io/krs?nim=${nim.value}`)
    krsData.value = res.data.map((item) => ({ ...item, nilai: item.nilai || '' }))
  }
  
  const simpanNilai = async () => {
    for (const item of krsData.value) {
      await axios.put(`https://sistemakademik1.mockapi.io/krs/${item.id}`, {
        ...item,
        nilai: item.nilai
      })
    }
    alert('Nilai berhasil disimpan!')
  }
  </script>
  
  <style scoped>
  .card {
    background: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 2rem auto;
  }
  input,
  select {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background: teal;
    color: #fff;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
  }
  .nilai-item {
    margin-top: 1rem;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 1rem;
  }
  </style>
  
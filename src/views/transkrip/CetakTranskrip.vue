<template>
    <div class="card">
      <h2>Cetak Transkrip Mahasiswa</h2>
      
      <input v-model="nim" placeholder="Masukkan NIM" />
      <button @click="ambilTranskrip">Tampilkan Transkrip</button>
  
      <div v-if="transkrip.length">
        <table class="transkrip-table">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Matakuliah</th>
              <th>SKS</th>
              <th>Nilai</th>
              <th>Bobot</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in transkrip" :key="item.id">
              <td>{{ item.kode }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.sks }}</td>
              <td>{{ item.nilai }}</td>
              <td>{{ hitungBobot(item.nilai) }}</td>
            </tr>
          </tbody>
        </table>
  
        <p><strong>Total SKS:</strong> {{ totalSKS }}</p>
        <p><strong>IPK:</strong> {{ ipk.toFixed(2) }}</p>
  
        <button @click="cetak">Cetak</button>
      </div>
  
      <p v-else>Belum ada data transkrip.</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const nim = ref('')
  const transkrip = ref([])
  const totalSKS = ref(0)
  const ipk = ref(0)
  
  const ambilTranskrip = async () => {
    const res = await axios.get(`https://mockapi.io/projects/686842bdd5933161d70b3886#/krs?nim=${nim.value}`)
    transkrip.value = res.data
    hitungIPK()
  }
  
  const nilaiMap = {
    'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'D': 1.0, 'E': 0
  }
  
  const hitungBobot = (nilai) => nilaiMap[nilai] || 0
  
  const hitungIPK = () => {
    let totalNilai = 0
    let totalSks = 0
    transkrip.value.forEach(item => {
      const bobot = hitungBobot(item.nilai)
      totalNilai += bobot * item.sks
      totalSks += item.sks
    })
    totalSKS.value = totalSks
    ipk.value = totalSks ? totalNilai / totalSks : 0
  }
  
  const cetak = () => window.print()
  </script>
  
  <style scoped>
  .card {
    background: white;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 700px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  input {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background: #008080;
    color: white;
    padding: 0.6rem 1.2rem;
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  table.transkrip-table {
    width: 100%;
    margin-top: 1rem;
    border-collapse: collapse;
  }
  
  table th, table td {
    border: 1px solid #ccc;
    padding: 0.6rem;
    text-align: left;
  }
  </style>
  
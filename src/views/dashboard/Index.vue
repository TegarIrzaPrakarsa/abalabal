<template>
    <div class="dashboard">
      <h2>Dashboard Rekap Akademik</h2>
  
      <div class="stat-grid">
        <div class="card">👨‍🎓 Jumlah Mahasiswa: {{ jumlahMahasiswa }}</div>
        <div class="card">👨‍🏫 Jumlah Dosen: {{ jumlahDosen }}</div>
        <div class="card">📚 Jumlah Matakuliah: {{ jumlahMatakuliah }}</div>
        <div class="card">🎯 Total SKS: {{ totalSKS }}</div>
        <div class="card">📈 Rata-rata IPK: {{ rataIpk }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const jumlahMahasiswa = ref(0)
  const jumlahDosen = ref(0)
  const jumlahMatakuliah = ref(0)
  const totalSKS = ref(0)
  const rataIpk = ref(0)
  
  onMounted(async () => {
    const [mhsRes, dosenRes, mkRes, krsRes] = await Promise.all([
      axios.get('https://mockapi.io/projects/686842bdd5933161d70b3886#/mahasiswa'),
      axios.get('https://mockapi.io/projects/686842bdd5933161d70b3886#/dosen'),
      axios.get('https://mockapi.io/projects/686842bdd5933161d70b3886#/matakuliah'),
      axios.get('https://mockapi.io/projects/686842bdd5933161d70b3886#/krs')
    ])
  
    jumlahMahasiswa.value = mhsRes.data.length
    jumlahDosen.value = dosenRes.data.length
    jumlahMatakuliah.value = mkRes.data.length
    totalSKS.value = mkRes.data.reduce((sum, m) => sum + Number(m.sks), 0)
  
    const ipkList = krsRes.data.map(k => {
      const nilaiMap = {
        'A': 4.0, 'A-': 3.7, 'B+': 3.3,
        'B': 3.0, 'B-': 2.7, 'C+': 2.3,
        'C': 2.0, 'D': 1.0, 'E': 0
      }
      return nilaiMap[k.nilai] ?? 0
    })
  
    const totalIPK = ipkList.reduce((sum, val) => sum + val, 0)
    rataIpk.value = ipkList.length ? (totalIPK / ipkList.length).toFixed(2) : 0
  })
  </script>
  
  <style scoped>
  .dashboard {
    padding: 2rem;
  }
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  .card {
    background: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    font-weight: bold;
  }
  </style>
  
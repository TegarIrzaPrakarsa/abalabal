<template>
    <div class="card">
      <h2>Data Matakuliah</h2>
  
      <div class="form-group">
        <input v-model="kode" placeholder="Kode Matakuliah (Contoh: MK01)" disabled />
        <select v-model="nama">
          <option disabled value="">Pilih Matakuliah</option>
          <option v-for="matkul in opsiMatkul" :key="matkul">{{ matkul }}</option>
        </select>
        <input type="number" v-model.number="sks" placeholder="Jumlah SKS" />
        <button @click="tambahMatkul">Tambah</button>
      </div>
  
      <div v-if="matakuliah.length" class="list">
        <div class="card-item" v-for="(m, index) in matakuliah" :key="index">
          <p><strong>{{ m.kode }}</strong> - {{ m.nama }} ({{ m.sks }} SKS)</p>
          <button @click="hapusMatkul(index)">Hapus</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const matakuliah = ref([])
  const nama = ref('')
  const sks = ref(0)
  const kode = ref('')
  const kodeIndex = ref(1)
  
  const opsiMatkul = [
    'PEMROGRAMAN BERBASIS KOMPONEN',
    'PEMROGRAMAN BERORIENTASI OBJEK',
    'JARINGAN KOMPUTER',
    'GRAFIKA KOMPUTER',
    'ELEKTRONIKA DIGITAL',
    'DESAIN ANALISIS ALGORITMA',
    'MATEMATIKA DISKRIT'
  ]
  
  const buatKode = () => {
    kode.value = `MK${kodeIndex.value.toString().padStart(2, '0')}`
  }
  
  const tambahMatkul = () => {
    if (!nama.value || !sks.value) return
  
    matakuliah.value.push({
      kode: kode.value,
      nama: nama.value,
      sks: sks.value
    })
  
    kodeIndex.value++
    nama.value = ''
    sks.value = 0
    buatKode()
  }
  
  const hapusMatkul = (index) => {
    matakuliah.value.splice(index, 1)
  }
  
  onMounted(() => {
    buatKode()
  })
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
  
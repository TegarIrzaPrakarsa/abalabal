<template>
    <div class="card">
      <h2>Manajemen Pengguna</h2>
  
      <form @submit.prevent="tambahUser">
        <input v-model="form.username" placeholder="Username" required />
        <select v-model="form.role" required>
          <option disabled value="">Pilih Role</option>
          <option>Admin</option>
          <option>Mahasiswa</option>
          <option>Dosen</option>
        </select>
        <button>Tambah User</button>
      </form>
  
      <ul>
        <li v-for="user in users" :key="user.id" class="user-item">
          {{ user.username }} ({{ user.role }})
          <button @click="hapusUser(user.id)">Hapus</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const users = ref([])
  const form = ref({ username: '', role: '' })
  
  const ambilUsers = async () => {
    const res = await axios.get(`https://sistemakademik1.mockapi.io/users`)
    users.value = res.data
  }
  
  const tambahUser = async () => {
    await axios.post(`https://sistemakademik1.mockapi.io/users`, form.value)
    form.value = { username: '', role: '' }
    ambilUsers()
  }
  
  const hapusUser = async (id) => {
    await axios.delete(`https://sistemakademik1.mockapi.io/users/${id}`)
    ambilUsers()
  }
  
  onMounted(ambilUsers)
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
  input, select {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  button {
    margin-top: 1rem;
    background: teal;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
  }
  .user-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 0;
  }
  </style>
  
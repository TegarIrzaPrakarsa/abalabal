<template>
    <div class="card">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const username = ref('')
  const password = ref('')
  const router = useRouter()
  
  function handleLogin() {
    if (username.value && password.value) {
      router.push('/dashboard')
    }
  }
  </script>
  
  <style scoped>
  .card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: 5rem auto;
  }
  input {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: teal;
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
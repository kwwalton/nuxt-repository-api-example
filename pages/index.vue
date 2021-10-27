<template>
  <div>
    <h1>Todo list</h1>
    <hr />
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }}
      </li>
    </ul>
    <hr />
    <button @click="getUsers">Get Users</button>
    <ul v-if="users.length">
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}
      </li>
    </ul>
    <hr />
    <Albums />
  </div>
</template>

<script>
import Repository from '~/repository'
export default {
  data() {
    return {
      todos: [],
      users: []
    }
  },
  created() {
    this.getTodos()
  },
  methods: {
    async getTodos() {
      try {
        const res = await Repository.todos.getTodos()
        this.todos = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async getUsers() {
      try {
        const res = await Repository.users.getUsers()
        this.users = res.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

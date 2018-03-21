<template>
  <div id="app">
    <input type="text" v-model="text"/>
    <button @click="addTodo()">Add</button>
    <ul>
      <li v-for="todo in todos">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  data () {
    return {
      text: null,
      todos: []
    }
  },
  mounted () {
    const todos = JSON.parse(this.$localStorage.get('todos'))
    if (todos) {
      this.todos = todos
    }
  },
  methods: {
    addTodo () {
      this.todos.push(this.text)
      this.text = null
      this.$localStorage.set('todos', JSON.stringify(this.todos))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>

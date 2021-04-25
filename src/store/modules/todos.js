export default {
  actions: {
    async getTodos({commit}){
      const res = await fetch('localhost:3000/todos/todo');
      const todos = await res.json();
      commit('updateTodos', todos);
    }
  },
  mutations: {
    updateTodos(state, todos){
      state.todos.push(todos);
    }
  },
  state: {
    todos: []
  },
  getters: {
    done(state) {
      state.todos.filter(todo => todo.done)
    },
    notDone(state) {
      state.todos.filter(todo => !todo.done)
    },
  },
};

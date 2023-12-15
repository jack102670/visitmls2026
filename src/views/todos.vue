<template>
    <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md p-6 mt-10">
        <h2 class="text-2xl font-semibold mb-4">Todo List</h2>
        <div class="mb-4">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <ul>
            <li v-for="(todo, index) in todos" :key="index"
                class="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 py-2">
                <span :class="{ 'line-through': todo.completed }" class="flex-grow">{{ todo.text }}</span>
                <button @click="removeTodo(index)"
                    class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Remove</button>
                <button @click="toggleComplete(index)"
                    class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">{{
                        todo.completed ? 'Incomplete' : 'Complete' }}</button>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'todosView',
    data() {
        return {
            newTodo: '',
            todos: [],
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, completed: false });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleComplete(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
    },
};
</script>
  
<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>
  
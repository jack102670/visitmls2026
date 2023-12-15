<template>
    <div>
        <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64 h-screen">
            <div class="container mx-auto">
                <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Todo list</h2>
                        <div class="flex items-center space-x-2">
                            <button @click="checkAll" class="px-3 py-2 bg-blue-500 text-white">Check All</button>
                            <button @click="markDoneSelected" :disabled="selectedTasks.length === 0"
                                class="px-3 py-2 bg-green-500 text-white">Mark Done</button>
                            <button @click="deleteSelected" :disabled="selectedTasks.length === 0"
                                class="px-3 py-2 bg-red-500 text-white">Delete Selected</button>
                        </div>
                    </div>
                    <form @submit.prevent="addTodo" class="mb-4 flex items-center">
                        <input v-model="newTodo" type="text" class="p-2 border" placeholder="Add new task" />
                        <button type="submit" class="ml-2 p-2 bg-blue-500 text-white">Add</button>
                    </form>

                    <!-- Tasks To Do Table -->
                    <div>
                        <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Tasks To Do</h2>
                        <ul class="space-y-2">
                            <li v-for="todo in todosToDo" :key="todo.id" class="flex items-center">
                                <input type="checkbox" v-model="selectedTasks" :value="todo.id" class="mr-2" />
                                <span class="text-slate-900 dark:text-white">{{ todo.title }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Completed Tasks Table -->
                    <div class="mt-6">
                        <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Completed Tasks</h2>
                        <ul class="space-y-2">
                            <li v-for="doneTodo in todosDone" :key="doneTodo.id" class="text-gray-500 dark:text-gray-400">
                                {{ doneTodo.title }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>

export default {
    name: 'TodoViews',
    data() {
        return {
            todos: [],
            newTodo: '',
            selectedTasks: [],
        };
    },
    computed: {
        // Filter todos into two separate arrays based on completion status
        todosToDo() {
            return this.todos.filter((todo) => !todo.completed);
        },
        todosDone() {
            return this.todos.filter((todo) => todo.completed);
        },
    },
    methods: {
        async addTodo() {
            try {
                console.log('Adding todo...');
                const response = await this.$axios.post('http://localhost:3000/todos', {
                    title: this.newTodo,
                    completed: false,
                });
                console.log('Todo added:', response.data);
                this.todos.unshift(response.data);
                this.newTodo = '';
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        },
        async markDone(todo) {
            try {
                // Update the completion status of the todo
                console.log('maerk...');
                await this.$axios.put(`http://localhost:3000/todos/${todo.id}`, {
                    completed: true,
                });

                // Remove the todo from the todosToDo array
                this.todos = this.todos.filter((t) => t.id !== todo.id);
            } catch (error) {
                console.error('Error marking todo as done:', error);
            }
        },

        async fetchTodos() {
            try {
                const response = await this.$axios.get('http://localhost:3000/todos');
                this.todos = response.data;
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        },
        checkAll() {
            // Get all task IDs to mark as selected
            this.selectedTasks = this.todosToDo.map((todo) => todo.id);
        },
        markDoneSelected() {
            // Filter selected tasks that are currently in the todosToDo array
            const selectedTasksToMarkDone = this.selectedTasks.filter(
                (taskId) => this.todosToDo.some((todo) => todo.id === taskId)
            );

            // Mark selected tasks as done
            selectedTasksToMarkDone.forEach((taskId) => {
                const selectedTodo = this.todos.find((todo) => todo.id === taskId);
                if (selectedTodo) {
                    this.markDone(selectedTodo);
                }
            });

            // Clear the selected tasks array
            this.selectedTasks = [];
        },


        deleteSelected() {
            // Remove selected tasks from the todos array
            this.todos = this.todos.filter((todo) => !this.selectedTasks.includes(todo.id));

            // Clear the selected tasks array
            this.selectedTasks = [];
        },

    },
    mounted() {
        this.fetchTodos();
    },
};
</script>
  
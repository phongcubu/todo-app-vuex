<template>
  <div>
        <p>Completed Tasks: {{ doneTodosCount }}</p>
        <p>Pending Tasks: {{ activeTodosCount }}</p>
        <todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
  </div>
</template>

<script type="text/javascript">
import Todo from "./Todo";
import {mapGetters} from "vuex";
export default {
    name:"todo-list",
    //props: ['todos'],
    components: {
        Todo,
    },
    data() {
        return {
            todos: this.$store.state.todos,
            };
    },
    computed: {
        ...mapGetters(["doneTodosCount", "activeTodosCount"])
    }
};
</script>
<template>
  <ol>
    <!--
      各todo-itemにその内容を表すtodoオブジェクトを指定することで、内容が動的に変化します。
      後述する"key"も各コンポーネントに指定する必要があります。
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>


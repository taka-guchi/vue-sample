import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
createApp(App).mount('#app')

import Counter from '/@components/Counter.vue'
createApp(Counter).mount('#counter')

import AttributeBinding from '/@components/AttributeBinding.vue'
createApp(AttributeBinding).mount('#bind-attribute')

import EventHandling from '/@components/EventHandling.vue'
createApp(EventHandling).mount('#event-handling')

import TwoWayBinding from '/@components/TwoWayBinding.vue'
createApp(TwoWayBinding).mount('#two-way-binding')

import ConditionalRendering from '/@components/ConditionalRendering.vue'
createApp(ConditionalRendering).mount('#conditional-rendering')

import ListRendering from '/@components/ListRendering.vue'
createApp(ListRendering).mount('#list-rendering')

import TodoList from '/@components/TodoList.vue'
const app = createApp(TodoList)
app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})
app.mount('#todo-list-app')


import Dashboard from "./components/Dashboard.vue"
import List from "./components/List.vue"
import EditForm from "./components/EditForm.vue"
import NotFound from "./NotFound.vue"

export default [
  {
    name: 'Form',
    path: '/',
    component: Dashboard
  },
  {
    name: 'Form',
    path: '/form',
    component: Dashboard
  },
  {
    name: 'Edit',
    path: '/form/:id',
    component: EditForm
  },
  {
    name: 'List',
    path: '/list',
    component: List
  },
  { path: '*', component: NotFound }
]

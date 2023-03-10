import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import LiekkasTable from 'liekkas-table'
import '../node_modules/liekkas-table/liekkas-table.css'


const app = createApp(App)

app.use(ElementPlus)
app.use(LiekkasTable)

app.mount('#app')

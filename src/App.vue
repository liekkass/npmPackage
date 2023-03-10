<template>
  <div>
    开发新组件
    <liekkas-table
      stripe
      :showQueryBox="true"
      :dataList="tableData"
      @getSelectChange="getSelectChange"
      @getClickRowData="getClickRowData"
    >
      <template v-slot:queryBox>
        <div>查询条件插槽</div>
      </template>
      <el-table-column
        label=""
        type="selection"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
    </liekkas-table>
  </div>
</template>

<script>
// import liekkasTable from '@/package/liekkasTable/liekkasTable.vue'
export default {
  name: 'App',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
//   components: {
//     'liekkas-table': liekkasTable
//   },
  methods: {
    getSelectChange(val) {
      console.log(val, 111)
    },
    getClickRowData(val) {
      console.log(val.row, 222)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

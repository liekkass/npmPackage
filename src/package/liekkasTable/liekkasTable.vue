<template>
  <div class="liekkas_table">
    <div class="liekkas_table_query_box">
      <slot
        v-if="showQueryBox"
        name="queryBox"
      ></slot>
    </div>
    <div class="liekkas_table_main">
      <el-table
        v-loading="loadAnimation"
        ref="searchTable"
        class="searchTable_table"
        height="100%"
        :data="dataList"
        v-bind="$attrs"
        @sort-change="sortChange"
        @select="selectChange"
        @select-all="selectChange"
        @selection-change="checkChange"
        @row-click="clickRow"
        :border="border"
        :empty-text="emptyText"
      >
        <slot />
      </el-table>
    </div>
    <div class="liekkas_table_pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizesList"
        :page-size="pageSize"
        :layout="layoutList"
        :total="dataList.length"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'liekkas-table',
  data() {
    return {}
  },
  props: {
    showQueryBox: {
      type: Boolean,
      default: false // 展示查询栏目
    },
    loadAnimation: {
      type: Boolean,
      default: false // 表格加载动画
    },
    dataList: {
      type: Array,
      default: () => {
        return [] // 表格数据源
      }
    },
    border: {
      type: Boolean,
      default: true // 表格边框
    },
    emptyText: {
      type: String,
      default: '暂无数据' // 表格空白提示信息
    },
    currentPage: {
      type: Number,
      default: 1 // 分页组件当前条数
    },
    pageSizesList: {
        type: Array,
        default: () => {
            return [10, 30, 50, 100]  // 分页个数选择设置
        }
    },
    pageSize: {
        type: Number,
        default: 10
    },
    layoutList: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    /**
     * 表格排序变化事件
     */

    sortChange(column, prop, order) {
      const param = {
        column: column,
        prop: prop,
        order: order
      }
      this.$emit('getSortChange', param)
    },

    /**
     * 手动勾选表格checkbox事件
     */
    selectChange(selection, row) {
      const param = {
        selection: selection,
        row: row
      }
      this.$emit('getSelectChange', param)
    },

    /**
     * 选择项发生变化时会触发该事件
     */
    checkChange(selection) {
      const param = {
        selection: selection
      }
      this.$emit('getColumnCheckChange', param)
    },
    /**
     *  点击某一行触发的事件
     */
    clickRow(row, column) {
      const param = {
        row: row,
        column: column
      }
      this.$emit('getClickRowData', param)
    },
    /**
     * pageSize  改变事件
     */
    handleSizeChange(size) {
      this.$emit('handleSizeChange', size)
    },
    /**
     * currentPage 改变事件
     */
    handleCurrentChange(currentPage) {
      this.$emit('handleCurrentChange', currentPage)
    }
  }
}
</script>
<style>
.liekkas_table_pagination{
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
</style>
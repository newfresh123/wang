<template>
  <div class="m-4">
    <div class="text-2xl">
      热门红单
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'date'">
          <a>
            {{ record.date }}
          </a>
        </template>
        <template v-else-if="column.key === 'analyses'">
          <a>
            {{ record.analyses }}
          </a>
        </template>
        <template v-else-if="column.key === 'spent'">
          <span>
            {{ record.spent }}
          </span>
        </template>
        <template v-else-if="column.key === 'money'">
          <span>
            {{ record.money }}
          </span>
        </template>
        <template v-else-if="column.key === 'result'">
          <span>
            {{ record.result }}
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue';
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '分析',
    dataIndex: 'analyses',
    key: 'analyses',
  },
  {
    title: '投入',
    dataIndex: 'spent',
    key: 'spent',
  },
  {
    title: '盈利',
    dataIndex: 'money',
    key: 'money',
  },
  {
    title: '结果',
    key: 'result',
  },
];

const data = [
  {
    date: '1',
    analyses: 'John Brown',
    spent: 32,
    money: 'New York No. 1 Lake Park',
    result: ['nice', 'developer'],
  },
  {
    date: '2',
    analyses: 'Jim Green',
    spent: 42,
    money: 'London No. 1 Lake Park',
    result: ['loser'],
  },
  {
    date: '3',
    analyses: 'Joe Black',
    spent: 32,
    money: 'Sidney No. 1 Lake Park',
    result: ['cool', 'teacher'],
  },
];
</script>

<style scoped lang="scss">
</style>

<template>
  <div class="m-4">
    <div class="flex">
      <span class="text-2xl flex-auto"> 直接投资回报率排名</span>
      <a-input-search class="flex-1" v-model:value="value" placeholder="input search text"
        @search="onSearch"></a-input-search>
    </div>
    <a-table :columns="columns" :data-source="data"  :pagination="{ pageSize: 50 }">
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
import { ref } from 'vue';
const value = ref<string>('');
/**
 *
 * @param searchValue
 * Todo
 */
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
</script>

<style scoped lang="scss">
</style>

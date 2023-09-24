<template>
  <div>
    <webHeader />
    <div class="flex-row flex-wrap flex justify-evenly h-24 items-center mx-80 bg-cyan-300">
      <div v-for="(item, index) in dropDownList" :key="index">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <span class="text-3xl">
              {{ item.label }}
            </span>
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item :key="index1" v-for="(children, index1) in item.children" >
                <span class="text-xl">
                  {{ children.label }}
                </span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
    <redList></redList>
    <gameLive></gameLive>
    <mockQuiz></mockQuiz>
    <businessCooperation></businessCooperation>
    <webFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import webFooter from '@/components/webFooter.vue'
import webHeader from '@/components/webHeader.vue'
import { DownOutlined } from '@ant-design/icons-vue';
import businessCooperation from '@/views/businessCooperation/businessCooperation.vue';
import gameLive from '@/views/gameLive/gameLive.vue';
import mockQuiz from '@/views/mockQuiz/mockQuiz.vue';
import redList from '@/views/redList/redList.vue';
const dropDownList = ref([
  {
    label: "热门红单",
    children: [
      {
        label: "足球竞猜",
      },
      {
        label: "排列三"
      },
      {
        label: "篮球竞猜"
      },
      {
        label: "北京单关"
      }
    ]
  },
  {
    label: "比赛实况",
    children: [
      {
        label: "足球竞猜",
      },
      {
        label: "排列三"
      },
      {
        label: "篮球竞猜"
      },
      {
        label: "北京单关"
      }
    ]

  },
  {
    label: "模拟竞猜",
    children: [
      {
        label: "足球竞猜",
      },
      {
        label: "排列三"
      },
      {
        label: "篮球竞猜"
      },
      {
        label: "北京单关"
      }
    ]

  },
  {
    label: "商务合作",
    children: [
      {
        label: "足球竞猜",
      },
      {
        label: "排列三"
      },
      {
        label: "篮球竞猜"
      },
      {
        label: "北京单关"
      }
    ]

  }
])
</script>


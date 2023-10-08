<template>
  <div class="text-center text-3xl  ">热门红单</div>
  <div class="flex flex-wrap m-2 justify-evenly">
    <!--热门红单-->
    <hotRed></hotRed>
    <!--热门黑单-->
    <hotBlack></hotBlack>
    <!--足球详情排名-->
    <football></football>
    <!--直接投资回报率排名-->
    <directInvestment></directInvestment>

  </div>
  <!--投资记录-->
  <userInvestment></userInvestment>
</template>

<script setup lang="ts">

import football from './football/football.vue'
import hotBlack from './hotBlackList/hotBlack.vue'
import hotRed from './hotRedList/hotRedList.vue'
import userInvestment from './userInvestment/userInvestment.vue'
import directInvestment from './directInvestment/directInvestment.vue'
</script>

<style scoped lang="scss">
</style>

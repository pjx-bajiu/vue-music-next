<template>
   <!-- <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view> -->
  <MHeader></MHeader>
  <MTab></MTab>
  <router-view></router-view>

</template>

<script>
import Header from './components/header/header.vue'
import Tab from './components/tab/tab.vue'

export default {
  components: {
    MHeader: Header,
    MTab: Tab
  }
}
</script>

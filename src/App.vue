<template>
   <!-- <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view> -->
  <div>
    <MHeader></MHeader>
  <MTab></MTab>
  </div>

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

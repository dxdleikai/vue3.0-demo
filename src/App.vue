<template>
<div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <a-button type="primary">Button</a-button> -->
    <HomeOutlined spin  />
    <SmileTwoTone /> 
    <HeartTwoTone twoToneColor="#eb2f96" />
</div>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {
  HomeOutlined, 
  SmileTwoTone,
  HeartTwoTone 
} from '@ant-design/icons-vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeOutlined,
    SmileTwoTone,
    HeartTwoTone 
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

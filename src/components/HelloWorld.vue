<template>
  <div class="hello">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <Modal :title="title" :data="data" />
      <!-- <Modal /> -->
  </div>
</template>

<script>
// import {Button} from 'ant-design-vue'
import {ref, reactive} from 'vue';
import { notification } from 'ant-design-vue';
import Modal from './Modal';

export default {
  name: 'HelloWorld',
  components: {
    Modal
  },
  data() {
    return {
      // modalData: 'fvadsfasf'
    }
  },
  setup() {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
      // const modalData = reactive({
      //   title: 'a',
      //   content: 'b'
      // });
      const title = ref('aaaaaa');
      const data = reactive({
        a: 1, 
        b: 2
      })
      return {
        title,
        data
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <!-- <a-modal v-model:visible="visible" :title="modalTitle" @ok="handleOk"> -->
    <!-- <a-modal v-model:visible="visible" :title="title" @ok="handleOk"> -->
        <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <p>{{title}}</p>
      <p>{{data}}</p>
    <a-modal v-model:visible="visible" title="title" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>{{title}}</p>
      <p>{{data}}</p>
      <!-- <p>Some {{modalContent}}...</p> -->
    </a-modal>
  </div>
</template>
<script>
// import { defineComponent, ref, toRefs, computed  } from 'vue';
import { ref, toRefs,  onMounted, onBeforeMount } from 'vue';
export default {
    props: ['title', 'data'],
  setup(props) {
    //   console.log(props.data);
      const {title, data} = toRefs(props);
      console.log(title.value, data.value)
    //   console.log(title2, data2);
    //   console.log(title, content);
    const visible = ref(false);
    // const modalTitle = computed(() => title.value);
    // const modalContent = computed(() => (content.value));
    // const modalTitle = ref('aa');

    const showModal = () => {
      visible.value = true;
    };
    // const getModalData = async() => {
    //     modalTitle.value = await content.value;
    // }
    onMounted(() => {
    //   console.log(title.value);

        // getModalData();
        // console.log(props);
        // console.log(title.value);
        // console.log(content.value);
        // console.log(_modalData.title.value);
        // console.log(_modalData.value);
        // modalTitle.value = _modalData.value;
        // console.log(modalTitle.value);
    })
    onBeforeMount(() => {
        // console.log(title2, data2);
        // console.log(props.title);
        // title.value = props.title.value;
    })

    const handleOk = e => {
      console.log(e);
      visible.value = false;
    };

    return {
    //    modalTitle, 
    //    modalContent,
      visible,
      showModal,
      handleOk,
    };
  },
  created() {
    //   console.log(this.modalData);
  }
};
</script>
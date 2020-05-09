<template>
  <div>
    <van-nav-bar
      title="detail"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import { NavBar,Uploader,Notify } from 'vant';
export default {
  name: 'detail',
  components: {
    [NavBar.name]: NavBar,
    [Uploader.name]: Uploader,
    [Notify.name]: Notify
  },
  data() {
    return {
      
    }
  },
  created() {
    let f = () => {
      console.log(arguments)
    }
    f(23)
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      Notify(file.file.type);
    },
  }
}
</script>
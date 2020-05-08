<template>
  <div>
    <van-nav-bar
      title="detail"
      left-arrow
      @click-left="onClickLeft"
    />
    {{this.$route.params}}
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  name: 'detail',
  components: {
    [NavBar.name]: NavBar
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
    }
  }
}
</script>
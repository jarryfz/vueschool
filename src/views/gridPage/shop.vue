<template>
  <div>
    <van-nav-bar
      title="小卖铺"
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="text-align:center">
      {{this.$store.state.count}}
    </div>

    <button @click="add">+1</button>
    <button @click="reduction">-1</button>
    <div>
      <button @click="addFun">+1</button>
      <button @click="reductionFun">-1</button>
    </div>
  </div>
</template>

<script>
import { NavBar, } from 'vant';
export default {
  name: "shop",
  components: {
    [NavBar.name]: NavBar,
  },
  data() {
    return {
      activeKey: 0,
    }
  },
  created() {
    /** 
     * Array.from()
     * 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
     * 
     * Array.of()
     * 用于将一组值，转换为数组
     * 
     * 数组实例 find()
     * 用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
     * 直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
     * 
     * 数组实例 findIndex()
     * 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
     * 
     * 数组实例的 includes()
     * 返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持
    */
    const o = {
      0: 'name',
      1: 'age',
      2: 'lex',
      length: 3
    }
    console.log('Array.from()',Array.from(o))//["name", "age", "lex"]
    console.log('Array.of()',Array.of(o,2,3))//[{0: "name", 1: "age", 2: "lex", length: 3}, 2, 3];
    console.log('find()',[5,3,2,4].find(function(value,index,array){
      return value > 3;
    }))//5
    console.log('findIndex()',[5,3,2,4].findIndex(function(value,index,array){
      return value > 3;
    }))//0
    console.log('includes',[41,21,63,28].includes(21));
  },
  methods: {
    onClickLeft() {
      this.$router.push({path: "/"})
    },
    add() {
      this.$store.commit('add')
    },
    reduction() {
      this.$store.commit('reduction')
    },
    addFun() {
      this.$store.dispatch('addFun')
    },
    reductionFun() {
      this.$store.dispatch('reductionFun')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
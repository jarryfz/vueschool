<template>
  <div>
    <van-nav-bar
      title="缴费中心"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="main-content">
      <div>
        <span>firstName:{{ firstName }}</span>
        <span>...</span>
        <span>lastName:{{ lastName }}</span>
      </div>
      <div class="id">
        fullName: {{ fullName }}
      </div>
      <button @click.prevent="change">change</button>

      <div>
        <input type="text" id="text">
        <p class="show"></p>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/mixins/navbar.js";
export default {
  name: "paymentCenter",
  mixins: [navbar],
  data() {
    return {
      firstName: 'firstName',
      lastName: 'lastName'
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  },
  created() {
    this.$nextTick(() => {
      document.querySelector('.id').innerHTML = `
        <div>created</div>
      `
    });
    let obj = {};
    Object.defineProperty(obj,'newkey',{
      value: 'newValue',//设置属性的值
      writable: true, //值是否可以重写。true | false
      enumerable: true, //目标属性是否可以被枚举。true | false（使用for...in或Object.keys()）
      configurable: false, //目标属性是否可以被删除或是否可以再次修改特性 true | false
    });
    console.log(obj);
    // obj.newkey = 'writable';
    console.log(Object.keys(obj));

    this.$nextTick(() => {
      let object = {
        _data: {
          username: ''
        }
      };
      Object.defineProperty(object,'username', {
        get() {
          return object._data.username
        },
        set(value) {
          object._data.username = value;
        }
      })
      document.createDocumentFragment
      document.addEventListener('input', function(e) {
        object._data.username = e.target.value;
        document.querySelector('.show').innerHTML = object._data.username
      })
    })
  },
  methods: {
    change() {
      this.firstName = 'bar'
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
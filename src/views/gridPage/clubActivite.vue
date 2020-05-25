<template>
  <div>
    <van-nav-bar
      title="社团活动"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="main-content">
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="photo-o" text="社团" @click="showPopup" />
        <van-grid-item icon="photo-o" text="活动" />
        <van-grid-item icon="photo-o" text="比赛" />
      </van-grid>
      <van-cell title="精彩活动" value="内容" />
        <div class="waterfall">
        <div class="item" style="">
          <div>gh</div>
          <p>name</p>
        </div>
        <div class="item">
          <div>gh</div>
        </div>
        <div class="item">
          <div>gh</div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="left" closeable class="van_popup">
      <div class="popup_content">
        <div class="popup_content_left">zuo</div>
        <div class="popup_content_right">you</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'clubActivite',
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.waterfall {
  -moz-column-count: 2; /* Firefox */
  -webkit-column-count: 2; /* Safari �� Chrome */
  column-count: 2;      /* 将 div 元素中的文本分为2列，并规定列间1rem像素的间隔。 */
  -moz-column-gap: 8px;
  -webkit-column-gap: 8px;
  column-gap: 8px;
  padding: 0 15px;
  margin-top: 8px;
  .item {
    padding: 8px;
    margin: 0 0 8px 0;
    -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;   /*break-inside: avoid; 避免元素内部断行并产生新列*/
    background: #fff;
    box-sizing: border-box;
    // box-shadow: 0 0 5px #CCCCCC;
  }
}
.van_popup {
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    height: 44px;
    display: block;
  }
  .popup_content {
    padding: 0 16px;
    display: flex;
    .popup_content_left {
      flex: 1;
      border-right: 1px solid #eaeaea;
    }
    .popup_content_right {
      flex: 2;
      padding-left: 8px;
    }
  }
}

</style>
<template>
  <div>
    <van-nav-bar
      title="失物招领"
      left-arrow
      fixed
      @click-left="onClickLeft"
    >
    <template #right>
      <van-icon name="plus" size="18" />
    </template>
    </van-nav-bar>
    <div class="main-content">
      <tab-refresh-list requestUrl="">
        <template v-slot="{ list }">
          <div class="list_wrap">
            <div class="list_item" v-for="i in 10" :key="i">
              <div class="list_item_head">
                <div class="list_item_head_avatar">
                  <img src="../../assets/image/avatar_boy.png" alt="">
                </div>
                <div class="list_item_head_info">
                  <div class="head_info_name">风一样的鸭子</div>
                  <div class="head_info_time">1小时前</div>
                </div>
                <div>
                  <van-tag type="primary">找物</van-tag>
                </div>
              </div>
              <div class="list_item_content">
                正能量促进学习放松心情的可以稍微有一点，但充满戾气的就不必了。孩子们都是祖国的花朵，不应该被网络上的一些戾气污染。
                有些心智不成熟的小朋友一不留神就有可能会被一些坏东西煽动利用，成为网络暴力的主力军，或滋生校园霸凌等恶性事件。年纪小的孩子们还是要以学习优 ...
              </div>
              <div class="list_item_pic">
                <img src="../../assets/image/home.jpg" alt="">
                <img src="../../assets/image/home1.jpg" alt="">
                <img src="../../assets/image/home2.jpg" alt="">
              </div>
            </div>
          </div>
        </template>
      </tab-refresh-list>
    </div>
  </div>
</template>

<script>
import { NavBar, Tag, Icon } from 'vant';
import navbar from '@/mixins/navbar.js';
import TabRefreshList from '@/components/TabRefreshList.vue';
export default {
  // name: "market",
  components: {
    TabRefreshList,
    [NavBar.name]: NavBar,
    [Tag.name]: Tag,
    [Icon.name]: Icon
  },
  mixins: [navbar],
  data() {
    return {}
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.list_wrap {
  padding: 8px 16px;
  background: #fff;
  .list_item {
    &::after {
      content: '';
      height: 1px;
      display: block;
      background: #cccccc;
      margin: 8px 0;
    }
    .list_item_head {
      display: -webkit-flex;
      display: flex;
      align-items: center;
      .list_item_head_avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .list_item_head_info {
        flex: 1;
        padding-left: 8px;
        .head_info_name {
          font-size: 16px;
          font-weight: 500;
        }
        .head_info_time {
          font-size: 12px;
          color: #777777;
        }
      }
    }
    .list_item_content {
      font-size: 14px;
      line-height: 20px;
      padding: 8px 0;
    }
    .list_item_pic {
      display: -webkit-flex;
      display: flex;
      flex-wrap: wrap;
      img {
        width: 33.3333%;
        
      }
    }
  }
}
</style>
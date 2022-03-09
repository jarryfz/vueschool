<template>
  <div>
    <van-nav-bar title="通知公告" left-arrow fixed @click-left="onClickLeft" />
    <div class="main-content">
      <van-dropdown-menu @change="dropdownChange">
        <van-dropdown-item v-model="value1" :options="option" />
      </van-dropdown-menu>
      <tab-refresh-list requestUrl="">
        <template v-solt="{ list }">
          <div class="notice_wrap">
            <div class="notice_list" v-for="i in 20" :key="i">
              <div class="notice_list_left">
                 <div class="notice_list_head">
                  公告标题
                </div>
                <div class="notice_list_content">
                  2020-5-18 12:10:50
                </div>
              </div>
              <div class="notice_list_right">
                <van-tag plain round type="primary">已读</van-tag>
              </div>
            </div>
          </div>
        </template>
      </tab-refresh-list>
    </div>
  </div>
</template>

<script>
import TabRefreshList from "@/components/TabRefreshList.vue";
export default {
  name: "announcement",
  components: {
    TabRefreshList
  },
  data() {
    return {
      value1: 0,
      option: [
        { text: "全部", value: 0 },
        { text: "未读", value: 1 },
        { text: "已读", value: 2 }
      ]
    };
  },
  created() {},
  methods: {
    dropdownChange(val) {
      Toast(`您点击了${this.option[val]}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.notice_wrap {
  // background: #fff;
  margin-top: 8px;
  .notice_list {
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
    padding: 8px 16px;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    .notice_list_left {
      flex: 1;
      .notice_list_head {
        font-size: 16px;
        font-weight: 500;
      }
      .notice_list_content {
        padding: 3px 0;
        color: #777777;
        font-size: 12px;
      }
    }
    
  }
}
</style>
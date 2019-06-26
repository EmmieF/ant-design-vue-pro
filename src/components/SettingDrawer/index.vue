<template>
  <div>
    <!-- <a-button type="primary" @click="showDrawer">Open</a-button> -->
    <a-drawer
      placement="right"
      :closable="true"
      :visible="visible"
      width="300px"
      @close="visible = !visible"
    >
      <template v-slot:handle>
        <div class="handle-setting" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'" />
        </div>
      </template>
      <div class="antd-pro-components-setting-drawer-steps">
        <div class="antd-pro-components-setting-drawer-index-title">
          整体风格设置
        </div>
        <div class="antd-pro-components-setting-drawer-index-blockChecbox">
          <div
            class="antd-pro-components-setting-drawer-index-item"
            @click="changeLayoutStyle('theme', 'dark')"
          >
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
              alt="dark"
            />
            <div
              class="antd-pro-components-setting-drawer-index-item-icon"
              v-show="layoutTheme === 'dark'"
            >
              <a-icon type="check" />
            </div>
          </div>
          <div
            class="antd-pro-components-setting-drawer-index-item"
            @click="changeLayoutStyle('theme', 'light')"
          >
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
              alt="light"
            />
            <div
              class="antd-pro-components-setting-drawer-index-item-icon"
              v-show="layoutTheme === 'light'"
            >
              <a-icon type="check" />
            </div>
          </div>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    layoutTheme: {
      type: String,
      default: "dark"
    }
  },
  methods: {
    changeLayoutStyle(type, value) {
      this.$emit("changeLayoutStyle", { type, value });
    }
  }
};
</script>

<style scope lang="less">
.handle-setting {
  position: absolute;
  right: 300px;
  top: 300px;
  z-index: 10;
  background: #1890ff;
  color: #fff;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 3px 0 0 3px;
}
.antd-pro-components-setting-drawer-steps {
  margin-bottom: 24px;
}
.antd-pro-components-setting-drawer-index-title {
  line-height: 40px;
}
.antd-pro-components-setting-drawer-index-blockChecbox {
  .antd-pro-components-setting-drawer-index-item {
    float: left;
    position: relative;
    margin-right: 10px;
    .antd-pro-components-setting-drawer-index-item-icon {
      position: absolute;
      right: 10px;
      bottom: 8px;
      color: #1890ff;
    }
  }
}
</style>

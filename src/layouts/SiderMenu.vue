<template>
  <div class="layout-menu"></div>
</template>

<script>
export default {
  name: "SilderMenu",
  data: function() {
    return {};
  },
  props: {
    collapsed: {
      type: Boolean
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
.layout-menu {
  padding-left: 24px;
}
</style>

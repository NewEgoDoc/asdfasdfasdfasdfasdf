<template>
  <div>
    2
    <div>
      3
      {{ itemList }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["itemList"]) },
  methods: {
    ...mapActions(["testCall"]),
    testFunc() {
      this.$store.dispatch("testCall");
    },
  },
  created() {
    this.testFunc();
  },
};
</script>

<style></style>

<template>
  <span>{{ message }}</span>
</template>

<script>
export default {
  data() {
    return {
      message: "hello!"
    };
  },
  created() {
    this.message = "bye!";
  },
  methods: {
    exampleMethod() {
      return 'banana';
    },
    exampleMethod2() {
      return this.exampleMethod3();
    },
    exampleMethod3() {
      return 'bike';
    },
  },
};
</script>

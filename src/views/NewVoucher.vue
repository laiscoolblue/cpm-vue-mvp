<template>
  <div class="container">
    <h2>Issue new Voucher of type "{{ preset.title }}"</h2>
    <form @submit.prevent="submitForm">
      <label for="value">
        <span>Value</span>
        <input type="number" name="value" v-model="value" placeholder="$$$" required />
      </label>

      <button type="submit" @click.prevent="submitForm">Issue voucher</button>
    </form>

    <p :class="`message ${messageType}`" v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NewVoucher',
  data() {
    return {
      value: '',
      message: '',
      messageType: 'message--error',
    };
  },
  computed: {
    route() {
      return this.$route;
    },
    presetId() {
      const { params } = this.route;
      return params.presetId;
    },
    ...mapState([
      'preset',
      'customer',
    ]),
  },
  methods: {
    resetForm() {
      this.value = '';
      this.message = '';
    },
    submitForm() {
      if (!this.value) {
        this.message = 'Missing required fields';
        this.messageType = 'message--error';

        return;
      }

      const data = {
        preset: this.preset,
        value: this.value,
        customer: this.customer.id,
      };

      this.resetForm();

      this.issueVoucher(data)
        .then(() => {
          this.message = 'Voucher issued! Yey!';
          this.messageType = 'message--success';
        });
    },
    ...mapActions([
      'retrievePreset',
      'issueVoucher',
    ]),
  },
  mounted() {
    this.retrievePreset(this.presetId);
  },
};
</script>

<style lang="scss">
  label {
    display: block;
    margin-bottom: 1em;
  }

  input {
    margin-left: 1em;
    padding: 0.5em 1em;
  }

  button {
    background-color: #285DAB;
    color: #fff;
    font-size: 1em;
    border-radius: 5px;
    border: 0;
    padding: 0.5em 1em;
    margin-bottom: 1em;
  }

  .message {
    padding: 0.5em 1em;
  }

  .message--success {
    color: #00B900;
    border: 1px solid #00B900;
  }

  .message--error {
    color: #E50000;
    border: 1px solid #E50000;

  }
</style>

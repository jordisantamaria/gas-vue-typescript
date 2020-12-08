<template lang="pug">
  div
    ul
      li
        router-link(to="/home") home
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class App extends Vue {}
</script>

<style></style>

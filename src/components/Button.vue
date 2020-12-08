<template lang="pug">
    button(@click="onClick").Button
        slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Button extends Vue {
    private onClick() {
        this.$emit('click');
    }
}
</script>
<style scoped>
.Button {
    cursor: pointer;
}
.Button:disabled {
    cursor: default;
}
</style>

<template lang="pug">
  div.sidebar
    h2 スライドの名前
    form(@submit.prevent="updateSlideName")
      label スライド名を記入してください
      input(v-model="textEdit" required).text-input
      Button(type="submit").btn 変更
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
    components: { Button },
})
export default class Home extends Vue {
    // Label,
    private textEdit = '%textEdit%';
    private isFrom = '%isFrom%';

    private updateSlideName() {
        console.log(this.textEdit);
        if (typeof google === 'undefined' || google.script === undefined) {
            return;
        }
        google.script.run
            .withSuccessHandler(() => {
                if (this.isFrom === 'modalDialog') {
                    google.script.host.close();
                }
            })
            .changeSlideName(this.textEdit);
    }
}
</script>

<style>
.text-input {
    margin-top: 8px;
    margin-bottom: 16px;
    width: 100%;
}
.btn {
    width: 100%;
}
</style>

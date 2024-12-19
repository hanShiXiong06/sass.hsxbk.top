<template>
	<text class="text-[20px]">{{helloWorld}}</text>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { onLoad } from '@dcloudio/uni-app'
let helloWorld = ref('');
onLoad(() => {
    // getHelloWorld().then((res) => {
        helloWorld.value = 'helloWorld'
    // })
})
</script>
<style lang="scss" scoped>

</style>

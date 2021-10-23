<template>
    <button @click="onClick()" class="focus:outline-none">
        <div :class="textStyle">{{text}}</div>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        textStyle: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        }
    }
}
</script>

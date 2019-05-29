<template>
    <div>
        <input id="toggle1" type="radio" name="toggle"/>
        <label for="toggle1">Question 1</label>
        <section id="content1">
            <p>Answer to question</p>
        </section>

        <input id="toggle2" type="radio" name="toggle"/>
        <label for="toggle2">Question 1</label>
        <section id="content2">
            <p>Answer to question</p>
        </section>

        <input id="toggle3" type="radio" name="toggle"/>
        <label for="toggle3">Question 1</label>
        <section id="content3">
            <p>Answer to question</p>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Accordian'
}
</script>
<style lang="scss" scoped>
input[type="radio"]{
    position: absolute;
    opacity: 0;
}
</style>


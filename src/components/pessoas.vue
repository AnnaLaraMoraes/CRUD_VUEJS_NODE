<template>
  <div id='pessoa'>
    <div v-bind:key="pessoa.id" v-for="pessoa in pessoas">
      <pessoasP v-bind:pessoa="pessoa" v-on:del-pessoa="$emit('del-pessoa', pessoa.id)" />
    </div>
  </div>
</template>

<script>
import pessoaP from './pessoaP.vue';
export default {
  name: "pessoas",
  components: {
    pessoaP
  },
  props: ["pessoas"]
}
</script>

<style scoped>
</style>
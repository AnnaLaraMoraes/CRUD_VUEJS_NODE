
<template>
  <div id="app">
    <b-container class="p-5">

      <header>
        <h1>Cadastro pessoas</h1></header>

      <!-- Modal -->
      <section class="mb-4">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-block btn-primary" @click="modalShow = !modalShow">
          criar 
        </button>
        <button type="button" class="btn btn-block btn-primary" @click="modalShow = !modalShow">
          recuperar
        </button>
        <button type="button" class="btn btn-block btn-primary" @click="modalShow = !modalShow">
          atualizar
        </button>
        <button type="button" class="btn btn-block btn-primary" @click="modalShow = !modalShow">
           <button type="button" class="btn btn-block btn-primary" @click="modalShow = !modalShow">
          deletar 
        </button>
          
        </button>

        <!-- Modal component -->
        <b-modal
          cancel-title="Cancelar"
          centered
          title="Título do Modal"
          size="sm"
          v-model="modalShow"
          ok-title="Da hora!"
          class="text-dark w-50 float-left">
            teste! <a href="https://bootstrap-vue.js.org/docs/components/modal">tste</a>.
        </b-modal>
      </section>
      <!-- Form  -->
      
      <!-- Form  -->
    </b-container>
  </div>
</template>

<script>
import bModal from 'bootstrap-vue/es/components/modal/modal'
export default {
  name: 'app',
  data () {
    return {
      themeColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      modalShow: false
    }
  },
  components: {
    'b-modal': bModal
  }
}
</script>


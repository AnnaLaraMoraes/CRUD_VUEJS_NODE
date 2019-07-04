<template>
  <div class="pessoa-P container">
    <div class="row">
      <div class="col-sm-10">
        <p>{{pessoa.nome}}</p>
        <p>{{pessoa.email}}</p>
        <p>{{pessoa.endereco}}</p>
        <p>{{pessoa.sexo}}</p>
        <p>{{pessoa.ativo}}</p>
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-outline-warning">Editar</button>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="$emit('del-pessoa', pessoa.id)"
        >Excluir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pessoasP",
  props: ["pessoa"]
};
</script>

<style scoped>
.pessoa-P {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>
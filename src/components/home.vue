<template>
  <div>
    <div id="add_btn" class="container">
      <div class="row">
        <div class="col-12">
          <b-form-input
            v-model="id"
            id="search"
            size="sm"
            class="mr-sm-2 search"
            placeholder="ID"
          ></b-form-input>
          <b-button
            ref="modal"
            id="search"
            size="sm"
            class="my-2 my-sm-0 search"
            type="button"
            variant="outline-secondary"
            v-on:click="buscar(id)"
          >Buscar</b-button> 
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            variant="outline-primary"
            v-b-modal.modal-prevent-closing
          >Cadastrar</b-button>
        </div><br><br><br><br>
        <!-- Listagem de pessoas -->   
        <div class="col-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Endereço</th>
                <th scope="col">Sexo</th>
                <th scope="col">Ativo</th>
                <th scope="col">Editar</th>
                <th scope="col">Remover</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pessoa in pessoas" :key="pessoa.id">
                <th scope="row">{{ pessoa.id }}</th>
                <td>{{ pessoa.nome }}</td>
                <td>{{ pessoa.email }}</td>
                <td>{{ pessoa.endereco }}</td>
                <td>{{ pessoa.sexo }}</td>
                <td>{{ pessoa.ativo }}</td>
                <td><button type="button" class="btn btn-outline-primary" @click="mostrarModal(pessoa.id, true)">Editar</button> </td>
                <td> <button type="button" class="btn btn-outline-primary"  @click="remover(pessoa.id)">Remover</button> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Fim listagem de pessoas --> 
        <div class="col-3">
          
        </div>
      </div>
    </div>

    <b-modal 
      id="modal-prevent-closing"
      ref="modal"
      title="Cadastro de Produtos"
      @show="resetModal"
      @hidden="resetModal"
      @ok="enviar(id)"
      centered
    >
      <form ref="form">
        <b-form-group
          :state="state"
          label="Nome"
          label-for="name-input"
          invalid-feedback="Nome é obrigatório"
        >
          <b-form-input id="name-input" v-model="nome" :state="state" required></b-form-input>
        </b-form-group>
        <b-form-group
          :state="state"
          label="Email"
          label-for="email-input"
          invalid-feedback="Email é obrigatório"
        >
          <b-form-input id="email-input" v-model="email" :state="state" required></b-form-input>
        </b-form-group>
        <b-form-group
          :state="state"
          label="Endereço"
          label-for="endereco-input"
          invalid-feedback="Endereço é obrigatório"
        >
          <b-form-input id="endereco-input" v-model="endereco" :state="state" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Sexo"
        >
        <b-form-select  invalid-feedback="Sexo é obrigatória" label-for="sexo-input" :state="state" v-model="sexo" :options="options" class="mb-3">
           <template slot="first">
             <option :value="null" disabled>-- Selecione uma opção --</option>
           </template>
        </b-form-select>
          <!--<b-form-input id="sexo-input" v-model="sexo" :state="state" required></b-form-input>-->
        </b-form-group>
        <b-form-group label="Status" :state="state" label-for="ativo-input" invalid-feedback="Atvo é obrigatória">
          <b-form-radio v-model="ativo" name="some-radios" value=1>Ativo</b-form-radio>
          <b-form-radio v-model="ativo" name="some-radios" value=0>Não ativo</b-form-radio>
        </b-form-group>
          <!-- <b-form-input id="ativo-input" v-model="ativo" :state="state" required></b-form-input> -->
      </form>
    </b-modal>
  </div>
</template>

<script>
import pessoasService from '@/api-services/pessoas.service';
let vm
export default {
  name: "Home",
  created() {
    vm = this
    vm.listar();
  },
  data() {
    return {
      showModal: false,
      id: "",
      nome: "",
      email: "",
      endereco: "",
      sexo: '',
      ativo: false,
      state: null,
      pessoas: [],
      options: [
          { value: 'F', text: 'Feminino' },
          { value: 'M', text: 'Masculino' },
          { value: 'I', text: 'Indefinido' }
        ]
    };
  }, 
  methods: {
    listar() {
      pessoasService.getAll().then((response) => {
       vm.pessoas = response.data;
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    });
    },
    remover(id) {
      pessoasService.delete(id).then((response) => {
          console.log(response);
          vm.listar();
        }).catch((error) => {
          console.log(error);
        });
    },
    mostrarModal(id, bool){
      vm.id = id
      vm.showModal = bool
      if (vm.showModal == true){
        this.$refs['modal'].show()
      }
      //console.log(vm.showModal);
    },
    checkFormValidity() {
      const valid = vm.$refs.form.checkValidity();
      vm.state = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      vm.nome = "";
      vm.email = "";
      vm.endereco = "";
      vm.sexo = "";
      vm.ativo = "";
      vm.state = null;
    },
    enviar(id) {
      console.log("id->");console.log(id);
      if ( id == '') {vm.addPessoa();}
      else{vm.updatePessoa(id);}
    },
    updatePessoa(id){
      if (!vm.checkFormValidity()) {
        return;
      }
      console.log('dados conferidos no form update');
      let newpessoa = {
        nome: vm.nome,
        email: vm.email,
        endereco: vm.endereco,
        sexo: vm.sexo,
        ativo: vm.ativo
      };
      pessoasService.update(id, newpessoa).then((response) => {
          console.log(response);
          vm.listar();
        }).catch((error) => {
          console.log(error);
        });
    },
    addPessoa() {
      if (!vm.checkFormValidity()) {
        return;
      }
      console.log('dados conferidos no form');
      let newpessoa = {
        nome: vm.nome,
        email: vm.email,
        endereco: vm.endereco,
        sexo: vm.sexo,
        ativo: vm.ativo
      };
        pessoasService.create(newpessoa).then((response) => {
          console.log(response);
          vm.listar();
        }).catch((error) => {
          console.log(error);
        });
       vm.$nextTick(() => {
        vm.$refs.modal.hide();
      });
    },
    buscar(id) {
      console.log('entrou em buscar');console.log(id)
      pessoasService.get(id).then((response) => {
          vm.pessoas = response;
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>

<style>
footer {
  display: block;
}
#add_btn {
  padding: 30px;
  border-width: 0.2rem 0 0;
  text-align: right;
}
#search {
  width: 10%;
  display: inline;
}
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.473);
}
</style>
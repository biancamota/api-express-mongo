
<template>
    <q-page padding>
      <div class="q-gutter-md">
        <p class="text-h6">Pedido</p>
        <q-form @submit.prevent="handleSubmit" class="q-gutter-y-md">
          <div class="row">
            <div class="col-6">
              <q-select
                outlined
                v-model="form.cliente"
                use-input
                input-debounce="0"
                label="Cliente"
                :options="filteredOption"
                clearable
                @filter="filterFn"
                option-label="nome"
                option-value="id"
                behavior="menu"
                :rules="[(val) => !!val || 'Cliente é obrigatório']"
              />
            </div>
            <div class="col-3">
              <q-input outlined label="Número" v-model="form.numero" />
            </div>
            <div class="col-3">
              <q-input
                outlined
                label="Valor"
                v-model="form.valor"
                :rules="[(val) => !!val || 'Valor é obrigatório']"
                prefix="R$"
              />
            </div>
            <div class="col-12">
              <q-input outlined label="Observação" v-model="form.observacao" type="textarea" />
            </div>
          </div>
  
          <div class="q-gutter-md q-mt-md text-right">
            <q-btn
              :label="isUpdate ? 'Atualizar' : 'Salvar'"
              color="primary"
              type="submit"
            />
            <q-btn
              label="Cancel"
              color="primary"
              flat
              :to="{ name: 'pedidos' }"
            />
          </div>
        </q-form>
      </div>
    </q-page>
  </template>
  
  
  <script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import ICliente from '../../interfaces/ICliente';
  import IPedido from '../../interfaces/IPedido';
  
  export default defineComponent({
    name: 'PedidosForm',
    setup() {
      const route = useRoute();
      const isUpdate = computed(() => route.params.id);
      const form = ref<IPedido>({
        id: 1,
        cliente: '',
        numero: 123,
        valor: 100,
        observacao: '',
      });
      const options = ref<ICliente[]>([
        {
          id: 1,
          nome: 'João',
        },
        {
          id: 2,
          nome: 'Maria',
        },
      ]);
      const filteredOption = ref<ICliente[]>([]);
  
      const filterFn = async (val, update) => {
        if (val === '') {
          console.log('val->' + val);
          update(() => {
            filteredOption.value = options.value;
          });
          return;
        }
  
        update(() => {
          const needle = val.toLowerCase();
          filteredOption.value = options.value.filter((option) =>
            option.nome.toLowerCase().includes(needle)
          );
        });
      };
      return {
        form,
        isUpdate,
        filterFn,
        options,
        filteredOption,
      };
    },
  });
  </script>
  
  <style scoped>
  </style>
  
const { createApp } = Vue;
import { peoples, fields } from './datas.js';
import { modals } from './modals.js';

createApp({
  data() {
    return {
      fields: fields,
      pessoas: peoples,
      search: "",
      modals,
    };
  },

  methods: {
    showModalPeopleRegistration(key) {
      this.modalPeopleRegistration = !this.modalPeopleRegistration
    },

    callModal(modal) {
      this.modals[modal]
    }
  },

  computed: {
    filterItems() {
      let pessoas = [];
      pessoas = this.pessoas.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || 
          item.cpf.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });


      return pessoas;
    }
  }
}).mount("#app");
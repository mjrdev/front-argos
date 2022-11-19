const { createApp } = Vue;
import { peoples, fields } from './datas.js';

createApp({
  data() {
    return {
      fields: fields,
      pessoas: peoples,
      search: "",
      modalPeopleRegistration: false
    };
  },

  methods: {
    showModalPeopleRegistration(key) {
      this.modalPeopleRegistration = !this.modalPeopleRegistration
    },


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
const { createApp } = Vue;

createApp({
  data() {
    return {
      fields: [
        {
          key: "nome",
          label: "Nome",
        },
        {
          key: "cpf",
          label: "cpf"
        },
        {
          key: "status",
          label: "status"
        }
      ],
      pessoas: [
        {
          nome: "Gusta",
          cpf: "383.497.950-34",
          status: 'visitante'
        },
        {
          nome: "bruna",
          cpf: "259.171.020-15",
          status: 'morador'
        },
        {
          nome: "carlos",
          cpf: "464.732.580-60",
          status: 'visitante'
        },
        {
          nome: "joão",
          cpf: "464.722.580-60",
          status: 'morador'
        },
        {
          nome: "priscila",
          cpf: "464.733.530-60",
          status: 'visitante'
        },
      ],
      search: "",

    };
  },

  methods: {
    showModal() {
      alert("modal aberto");
    }
  },

  computed: {
    filterItems() {
      let pessoas = [];
      pessoas = this.pessoas.filter((item) => {
        return (
          item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || 
          item.cpf.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });


      return pessoas;
    }
  }
}).mount("#app");
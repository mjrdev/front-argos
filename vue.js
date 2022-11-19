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
          status: 'visitante',
          bloco: '5A'
        },
        {
          nome: "bruna",
          cpf: "259.171.020-15",
          status: 'morador',
          bloco: '5B'
        },
        {
          nome: "carlos",
          cpf: "464.732.580-60",
          status: 'visitante',
          bloco: '5C'
        },
        {
          nome: "andreza",
          cpf: "464.722.580-60",
          status: 'morador',
          bloco: '5A'
        },
        {
          nome: "marcos",
          cpf: "464.733.530-60",
          status: 'morador',
          bloco: '5C'
        },
        {
          nome: "jean",
          cpf: "264.422.580-60",
          status: 'morador',
          bloco: '5B'
        },
        {
          nome: "kleber",
          cpf: "964.233.530-60",
          status: 'morador',
          bloco: '5B'
        },
        {
          nome: "klebson",
          cpf: "664.122.580-60",
          status: 'morador',
          bloco: '5A'
        },
        {
          nome: "amanda",
          cpf: "364.233.530-60",
          status: 'visitante',
          bloco: '5C'
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
const { createApp } = Vue;

createApp({
  data() {
    return {
      pessoas: [
        {
          id: "1",
          nome: "Gusta",
          cpf: "383.497.950-34",
          status: 'visitante'
        },
        {
          id: "2",
          nome: "bruna",
          cpf: "259.171.020-15",
          status: 'morador'
        },
        {
          id: "3",
          nome: "carlos",
          cpf: "464.732.580-60",
          status: 'visitante'
        },
        {
          id: "4",
          nome: "joão",
          cpf: "464.722.580-60",
          status: 'morador'
        },
        {
          id: "5",
          nome: "priscila",
          cpf: "464.733.530-60",
          status: 'visitante'
        },
      ]
    };
  },

  methods: {
    showModal() {
      alert("modal aberto");
    }
  }
}).mount("#app");
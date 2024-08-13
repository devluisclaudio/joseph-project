import ia from "./ia";

const gemini = {
  percentImpacts: () => {
    return ia.post("api/geminipro.php", {
      stec_APIKEY: "lfs01",
      clientid: 987,
      prompt: `simule que você é uma api e esta buscando índices de insegurança alimentar gerado por seca para revisões ( % da população não urbana passando fome) retorne os dados em formato de json com a chave percent e o valor do lado somente isso, sem mensagens de explicação na primeira posição. E na segunda posição do array a porcentagem de estimar inflação gerada pela seca no Amazonas. E na terceira posição do array a porcentagem de estimar impacto na navegação em secas passadas  ( de navios fretes fluviais e viagens impactadas)`,
    });
  },
};

export default gemini;

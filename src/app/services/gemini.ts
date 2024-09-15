import ia from "./ia";

const gemini = {
  percentImpacts: (additionalContext: string) => {
    const prompt = `Simule que você é uma api e esta buscando índices de insegurança alimentar gerado por seca para revisões ( % da população não urbana passando fome) retorne os dados em formato de json com a chave percent e o valor do lado somente isso, sem mensagens de explicação na primeira posição. E na segunda posição do array a porcentagem de estimar inflação gerada pela seca no Amazonas. E na terceira posição do array a porcentagem de estimar impacto na navegação em secas passadas  ( de navios fretes fluviais e viagens impactadas)`;
    return ia.post(
      "",
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: "Contexto adicional:" + additionalContext,
              },
            ],
          },
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  newsGemini: (additionalContext: string) => {
    const prompt = `Com os dados que você possui em seu treinamento, retorne uma notícia prevista para os anos futuros na amazonia em formato de html com titulo, subtitulo e um paragrafo resumido relacionando aos impactos na região traduzido para o inglês`;
    return ia.post(
      "",
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: "Contexto adicional:" + additionalContext,
              },
            ],
          },
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  chatGemini: async (prompt: string, additionalContext: string) => {
    const requestPayload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "Contexto adicional:" + additionalContext,
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text:
                "Vamos conversar sobre mudanças climáticas na Amazônia" +
                prompt,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.7,
        topP: 0.9,
        topK: 50,
      },
    };
    return ia.post("", requestPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  loadTrainingData: async () => {
    try {
      const response = await fetch(
        "https://r.jina.ai/https://stec.cx/api/client987.json"
      );
      if (!response.ok) {
        throw new Error("Erro ao carregar o texto de treinamento da Jina AI.");
      }
      const data = await response.text();
      return data || "";
    } catch (error) {
      console.error("Erro ao carregar o texto de treinamento:", error);
      return "";
    }
  },
  getSolutionForNews: (newsContent: string) => {
    const prompt = `The news below reports a predicted climate problem for the end of 2024. Based on this news, provide a solution or preventive method that could be applied to mitigate the impacts described:
    
    "${newsContent}"
    
    Respond with a paragraph describing the solution or preventive method.`;

    return ia.post(
      "",
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default gemini;

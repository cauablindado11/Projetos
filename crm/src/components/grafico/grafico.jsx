// ⇩⇩ Importando componentes necessários do React e da biblioteca de gráficos do Google. ⇩⇩
import React from "react";
import { Chart } from "react-google-charts";

// ⇩⇩ Definindo os dados para o gráfico. ⇩⇩
export const data = [
  ["1", "Atividades", "Negócios", "Vendas", "População que compra"],
  ["Janeiro", 80.66, 1.67, "mais vendas", 33739900],
  ["Fevereiro ", 79.84, 1.36, "mais vendas", 81902307],
  ["Março", 78.6, 1.84, "menos vendas", 5523095],
  ["Abril", 72.73, 2.78, "média das vendas", 79716203],
  ["Maio", 80.05, 2, "menos vendas", 61801570],
  ["Junho", 72.49, 1.7, "mais vendas", 73137148],
  ["Julho", 68.09, 4.77, "menos vendas", 31090763],
  ["Agosto", 81.55, 2.96, "menos vendas", 7485600],
  ["Setembro", 68.6, 1.54, "média das vendas", 141850000],
  ["Outubro", 78.09, 2.05, "menos vendas", 307007000],
  ["Novembro", 73.06, 1.75, "mais vendas", 20700000],
  ["Dezembro", 73.06, 1.75, "média das vendas", 207008000],
];

// ⇩⇩ Configurando as opções para a aparência do gráfico. ⇩⇩
export const options = {
  title:
    "Gráfico que representa uma taxa de atividades e de população que compra",
  hAxis: { title: "Taxa de Compra" },
  vAxis: { title: "Taxa de Atividades" },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: "Times-Roman",
      color: "green",
      bold: true,
      italic: true,
      auraColor: "none",
    },
  },
};

// ⇩⇩ Criando um componente funcional "Grafico" que renderiza um BubbleChart usando os dados e opções fornecidos. ⇩⇩
export function Grafico() {
  return (
    <Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

// ⇩⇩ Exportando o componente "Grafico" como a exportação padrão do arquivo. ⇩⇩
export default Grafico;

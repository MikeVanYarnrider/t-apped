/* 1 Liter Leitungswasser kostet in Deutschland durchschnittlich 0,2 Cent. 
Mineralwasser aus dem Supermarkt kostet zwischen 19 und 50 Cent/Liter. Für 1 Euro 
bekomme man also rund 500 Liter Leitungswasser aber nur 2 bis 5 Flaschen Mineralwasser. 
International gesehen ist deutsches Leitungswasser gleichwohl teuer. Zum Vergleich: In den USA 
kostet der Liter nur 0,05 Cent und liegt damit um rund 75 Prozent unter dem deutschen Preis. */

const waterUsageYear = 350000; // Litre
const avgTapWater = 1 / 500; // €
const avgBottledWater = 0.35; // €

// FIXME -> i am not correct!!!!
// water usage calculator
const waterCalc = water => {
  const month = 12;
  const avgUsageMonth = waterUsageYear / month;
  const usageArr = [];
  for (let i = 0; i < 12; i++) {
    usageArr.push(avgUsageMonth);
  }
  return usageArr;
};

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "L of water",
        data: waterCalc(waterUsageYear),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

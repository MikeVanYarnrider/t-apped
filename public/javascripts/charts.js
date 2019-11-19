/* 1 Liter Leitungswasser kostet in Deutschland durchschnittlich 0,2 Cent. 
Mineralwasser aus dem Supermarkt kostet zwischen 19 und 50 Cent/Liter. Für 1 Euro 
bekomme man also rund 500 Liter Leitungswasser aber nur 2 bis 5 Flaschen Mineralwasser. 
International gesehen ist deutsches Leitungswasser gleichwohl teuer. Zum Vergleich: In den USA 
kostet der Liter nur 0,05 Cent und liegt damit um rund 75 Prozent unter dem deutschen Preis. */

/* 
https://www.mehrweg-mach-mit.de/getraenkeverpackungen/glasflaschen/ 
https://www.berlinertageszeitung.de/wirtschaft/4654-deutsche-trinken-durchschnittlich-148-liter-mineralwasser-pro-jahr.html
*/

// water well calc
const waterUsageYear = 350000; // Litre
const avgTapWater = 1 / 500; // €
const avgBottledWater = 0.35; // €

// FIXME -> i am not correct!!!!
// water usage calculator
const waterCalc = water => {
  const month = 12;
  const avgUsageMonth = water / month;
  const usageArr = [];
  for (let i = 0; i < 12; i++) {
    usageArr.push(avgUsageMonth.toFixed() * (Math.random(0.005) + 1));
  }
  return usageArr;
};

function randomizer(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const usageCalc = () => {
  // water bottle calc
  const minWaterPerPerson = 2; // Litre/day
  const berlinCitizens = 3700000;
  const waterConsumeYear = berlinCitizens * minWaterPerPerson * 365;
  const waterBottled = 148 * berlinCitizens; //Litre/year

  const bottled = waterBottled;
  const well = 380000;
  const other = waterConsumeYear - bottled - well;
  data = [well, bottled, other]; //"bottle water", "water well", "other"
  return data;
};

const water = document.getElementById("myWaterChart").getContext("2d");
const myWaterChart = new Chart(water, {
  type: "bar",
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
        label: "Monthly consume of public water fountains",
        data: waterCalc(waterUsageYear),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    hover: true,
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

const usage = document.getElementById("myUsageChart").getContext("2d");
const myUsageChart = new Chart(usage, {
  type: "bar",
  data: {
    labels: ["water well", "bottled water", "other"],
    datasets: [
      {
        label: "Use of drinking sources",
        data: usageCalc(),
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

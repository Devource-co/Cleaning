export const chartOptions = {
  legend: {
    display: false,
  },
  hover: {
    mode: "nearest",
    intersect: false,
    axis: "xy",
  },
  tooltips: {
    mode: "index",
    intersect: false,
    axis: "xy",
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
        barPercentage: 0.5,
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
}
export const chartData = (chartLabels, deep, movein, standard) => ({
  labels: chartLabels,
  datasets: [
    {
      label: "Deep",
      data: deep,
    },
    {
      label: "Move in / move out",
      data: movein,
    },
    {
      label: "Standard",
      data: standard,
    },
  ],
})

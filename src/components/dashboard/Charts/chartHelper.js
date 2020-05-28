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
export const chartData = (chartLabels, reads, messages, failledSearches) => ({
  labels: chartLabels,
  datasets: [
    {
      label: "Reads",
      data: reads,
    },
    {
      label: "Messages",
      data: messages,
    },
    {
      label: "Failled searches",
      data: failledSearches,
    },
  ],
})

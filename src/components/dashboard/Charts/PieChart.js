import { Doughnut } from "react-chartjs-2"
import React from "react"
import { chartOptions, chartData } from "./chartHelper"

export default ({ chartLabels, reads, messages, failledSearches }) => {
  const data = chartData(
    [1, 2, 3, 4, 5, 5, 6],
    [1, 1, 22, 34, 45, 5, 6],
    [1, 2, 31, 41, 5, 5, 6],
    [1, 2, 3, 4, 5, 5, 6]
  )
  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 100, 1000)
    gradient.addColorStop(0, color)
    return gradient
  }

  const getChartData = canvas => {
    if (data.datasets) {
      const colors = ["#4040a0ea", "#05D305", "transparent"]
      data.datasets.forEach((set, i) => {
        set.backgroundColor = setGradientColor(canvas, colors[i])
        set.borderColor =
          colors[i] === "transparent" ? "#fc60a8" : "transparent"
        set.borderWidth = 2
        set.lineWidth = 0
        set.pointRadius = 0
      })
    }
    return data
  }
  return (
    <div style={{ width: "50%" }}>
      <Doughnut
        width={170}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          percentageInnerCutout: 0.1,
          legend: {
            display: false,
            position: "right",
          },
        }}
        data={{
          labels: ["Quotes", "Bookings"],
          datasets: [
            {
              label: "Rainfall",
              backgroundColor: ["#05d305d0", "#4040a0"],
              hoverBackgroundColor: ["#175000", "#003350"],
              data: [65, 56],
            },
          ],
        }}
      />
    </div>
  )
}

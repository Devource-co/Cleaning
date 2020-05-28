import { Line } from "react-chartjs-2"
import React from "react"
import { css } from "emotion"
import { chartOptions, chartData } from "./chartHelper"
import { Chart, H2, H1 } from "./main.styles"
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
    <Chart>
      <div className="header">
        <H1>Customers</H1>
      </div>
      <div
        style={{
          height: "85%",
        }}
      >
        <Line options={chartOptions} data={getChartData} />
      </div>
    </Chart>
  )
}

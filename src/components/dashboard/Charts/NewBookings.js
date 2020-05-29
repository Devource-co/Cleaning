import { Line } from "react-chartjs-2"
import React from "react"
import { chartOptions, chartData } from "./newBookingsOptions"
import { Chart, H1 } from "./main.styles"
import getCountsPerDay, { daylist } from "./getountsPerDay"

export default bookingData => {
  const deepCleaning =
    bookingData.bookingData &&
    bookingData.bookingData.filter(item => {
      return item.type.value === "deep"
    })
  const carpetCleaning =
    bookingData.bookingData &&
    bookingData.bookingData.filter(item => {
      return item.type.value === "move in/ move out"
    })
  const standardCleaning =
    bookingData.bookingData &&
    bookingData.bookingData.filter(item => {
      return item.type.value === "standard"
    })
  const data = chartData(
    daylist,
    getCountsPerDay(deepCleaning || []),
    getCountsPerDay(carpetCleaning || []),
    getCountsPerDay(standardCleaning || [])
  )
  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 100, 1000)
    gradient.addColorStop(0, color)
    return gradient
  }

  const getChartData = canvas => {
    if (data.datasets) {
      const colors = ["#4040a0ea", "#05D305", "#fc60a8"]
      data.datasets.forEach((set, i) => {
        set.backgroundColor = setGradientColor(canvas, "transparent")
        set.borderColor = colors[i]
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
        <H1>New Bookings</H1>
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

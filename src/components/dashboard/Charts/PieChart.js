import { Doughnut } from "react-chartjs-2"
import React from "react"
import { chartOptions, chartData } from "./chartHelper"

export default ({ bookingsCount, quotesCount }) => {
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
              data: [bookingsCount, quotesCount],
            },
          ],
        }}
      />
    </div>
  )
}

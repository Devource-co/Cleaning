import React, { useState, useEffect } from "react"
import {
  Filter,
  ButtonFilter,
  VerticalLine,
  SearchFilter,
  SearchInput,
  CategoryContainer,
  SearchContainer,
} from "./BookingHistory.styles"

export default ({ setDate, setSort, sort, setKeyWord }) => {
  const [head, setHead] = useState(1)
  const [sortPopUp, setSortPopUp] = useState(false)

  const activeNavColor = { background: "#4040a0", color: "#fff" }
  const handleClickNav = e => {
    e.preventDefault()
    setHead(e.target.value)
  }
  return (
    <>
      <Filter>
        <ButtonFilter>
          <button
            value={1}
            onClick={handleClickNav}
            style={head == 1 ? activeNavColor : {}}
          >
            All
          </button>
          <VerticalLine />
          <button
            value={2}
            onClick={handleClickNav}
            style={head == 2 ? activeNavColor : {}}
          >
            Completed
          </button>
          <VerticalLine />
          <button
            value={3}
            onClick={handleClickNav}
            style={head == 3 ? activeNavColor : {}}
          >
            Missed
          </button>
          <VerticalLine />
          <button
            value={4}
            onClick={handleClickNav}
            style={head == 4 ? activeNavColor : {}}
          >
            Cancelled
          </button>
        </ButtonFilter>
        <SearchFilter>
          <CategoryContainer>
            <div>
              <h1>Recurring Booking </h1>
              <p>(26)⌄</p>
            </div>
            <div className="sort">
              <p>Sort</p>
              <button onClick={() => setSortPopUp(true)}>{sort}⌄</button>
              {sortPopUp && (
                <div className="tooltip" style={{ zIndex: "1000" }}>
                  <button
                    onClick={e => {
                      setSortPopUp(false)
                      setSort(e.target.value)
                    }}
                    value="Newest"
                    type="button"
                  >
                    Newest
                  </button>
                  <button
                    onClick={e => {
                      setSortPopUp(false)
                      setSort(e.target.value)
                    }}
                    value="Oldest"
                    type="button"
                  >
                    Oldest
                  </button>
                </div>
              )}
            </div>
          </CategoryContainer>
          <SearchContainer>
            <div>
              <SearchInput
                onChange={e => setKeyWord(e.target.value)}
                placeholder="Search"
                type="text"
              />
            </div>
            <div>
              <SearchInput
                type="date"
                onChange={e => setDate(e.target.value)}
              />
            </div>
          </SearchContainer>
        </SearchFilter>
      </Filter>
      {sortPopUp && (
        <div
          onClick={() => {
            setSortPopUp(false)
          }}
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            background: "transparent",
            zIndex: "999",
          }}
        />
      )}
    </>
  )
}

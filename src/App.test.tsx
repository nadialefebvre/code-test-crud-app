import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders title", () => {
  render(<App />)
  const title = screen.getByText(/Well Done/i)
  expect(title).toBeInTheDocument()
})

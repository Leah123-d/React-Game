import React from "react";
import "@testing-library/jest-dom";
import { expect, test} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Scoreboard from '../components/Scoreboard.jsx'; 

test('should render scoreboard', () => {
  render(<Scoreboard />); 

  const title = screen.getByText(/Scoreboard/i);

  expect(title).toBeInTheDocument();
})


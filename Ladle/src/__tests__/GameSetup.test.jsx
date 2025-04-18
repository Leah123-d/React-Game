import React from "react";
import "@testing-library/jest-dom";
import { expect, test, jest, afterEach } from "@jest/globals";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuessSetup from "../components/GameSetup";

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test("should display component header", async () => {
  const mocknewPlayer = jest.fn();

  render(<GuessSetup newPlayer={mocknewPlayer} />);

  expect(
    screen.getByRole("heading", { name: /Setup your Game!/i })
  ).toBeInTheDocument("Setup your Game!");
});

test("scoreboard component should be clicked", async () => {
  const mockOpenScoreBoard = jest.fn();
  render(
    <GuessSetup
    OpenScoreBoard={mockOpenScoreBoard}
    createNewPlayer={jest.fn()}
    newPlayer={{ name: "" }}
    />
  );

  const button = screen.getByRole("button", { name: /ScoreBoard/i });

  await userEvent.click(button);

  expect(mockOpenScoreBoard).toHaveBeenCalledTimes(1);
});

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { render, screen } from "@testing-library/react";

import PostPage from "./PostPage";

jest.mock("react-redux");

describe("PostPage", () => {
  const dispatch = jest.fn();

  const doneTasks = [
    { id: 100, title: 'complete task', done: true },
    { id: 101, title: 'incomplete task', done: true },
  ]

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      doneTasks,
    }))
  );
  it('renders PostPage', () => {
    render((<PostPage />));

    expect(screen.getByText('Choose What You Want To Post')).toBeInTheDocument();
  })
});

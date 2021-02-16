import React from "react";
import { StyledStartButton } from "./Styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return <StyledStartButton onclick={callback}>Start Game</StyledStartButton>;
};

export default StartButton;

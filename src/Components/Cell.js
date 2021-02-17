import React from "react";
import { StyledCell } from "./Styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color}>
      {console.log("Re Render")}
    </StyledCell>
  );
};

export default React.memo(Cell);

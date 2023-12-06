import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint.js";

export const Alert = () => {
  return <TaskAlert></TaskAlert>;
};

const TaskAlert = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  border-radius: 4px;
  background: ${COLOR.RED};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
`;

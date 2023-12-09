import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint.js";

export const Alert = ({ isActive, alertText }) => {
  return (
    <TaskAlert isActive={isActive}>
      <TextAlert>{alertText}</TextAlert>
    </TaskAlert>
  );
};

const TaskAlert = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  border-radius: 4px;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  opacity: 0;
  background: ${COLOR.RED};
  font-family: ${FONTFAMILY.NOTO_SANS};

  ${(props) =>
    props.isActive
      ? `{ opacity: 1;
       transform: translateX(-50%) translateY(0) }`
      : ``}

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    width: 100%;
  }
`;

export default Alert;

const TextAlert = styled.div`
  color: ${COLOR.WHITE};s
  ${TEXT.S}
  padding: 10px 20px;
`;

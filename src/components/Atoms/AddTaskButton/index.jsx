import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const AddTaskButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <img src={plus} className="button" />
      <div className="task">タスクを追加</div>
    </Button>
  );
};
export default AddTaskButton;

const Button = styled.button`
  display: flex;
  padding: 2px 6px;
  gap: 10px;
  background: none;
  border: none;
  border-radius: 12px;
  transition: 0.2s;
  aline-items: center;

  .button {
    width: 20px;
    height: 20px;
  }

  .task {
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.S};
    color: ${COLOR.GREEN};
  }

  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    cursor: pointer;
  }
`;

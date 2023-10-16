import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";

export const EditButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <img src={pencil} className="button" />
    </Button>
  );
};
export default EditButton;

const Button = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  border-radius: 50%;
  padding: 0;
  transition: 0.2s;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  .button {
    width: 100%;
    height: 100%;
  }

  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    cursor: pointer;
  }
`;

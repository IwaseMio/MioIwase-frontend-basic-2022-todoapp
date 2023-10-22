import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";

export const Checkbox = (props) => {
  return (
    <Button onClick={props.onClick}>
      <div>
        <img src={check} className="checkbox" />
      </div>
    </Button>
  );
};
export default Checkbox;

const Button = styled.button`
  display: flex;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  background: none;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  padding: 0;
  justify-content: center;
  align-items: center;
  :hover .checkbox {
    display: block;
  }

  :hover {
    transition: 0.2s;
    cursor: pointer;
  }

  .checkbox {
    width: 16px;
    height: 16px;
    display: none;
  }
`;

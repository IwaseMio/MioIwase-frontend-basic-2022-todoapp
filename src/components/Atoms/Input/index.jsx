import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  const onkeypress = (e) => {
    if (e.key === "Enter") {
      inputRef.current.onblur();
      inputRef.current.onkeypress("blur", () => {
        onEditComplete(inputRef.current.value);
        onkeypress(inputRef.current.value);
      });
    }
  };

  useEffect((props) => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.onblur = (e) => {
      const inputText = e.target.value;
      props.onEditComplete(inputText);
    };
  }, []);

  return <StyledInput ref={inputRef} name="input" type="text" />;
};

export default Input;

const StyledInput = styled.input`
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  width: 100%;
  height: 20px;
  font-weight: 500;
  padding: 0px 4px;
    outline: none;
  }
`;

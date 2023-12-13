import styled from "styled-components";
import React, { useState } from "react";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import COLOR from "../../../variables/color";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

export default Task;

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 2px 6px;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  overflow: hidden;
`;

const StyledTaskName = styled.div`
  ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  width: 100%;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
`;

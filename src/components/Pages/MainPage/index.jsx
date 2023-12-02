import styled from "styled-components";
import React from "react";
import { Title } from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledWrapperTodoCard>
        <TodoCard />
      </StyledWrapperTodoCard>
    </StyledWrapper>
  );
};
export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 20px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 20px;
  }
`;

const StyledWrapperTodoCard = styled.div`
  width: 100%;
  max-width: 500px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 100%;
  }
`;

import styled from "styled-components";
import React, { useState } from "react";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value, index) => {
    const changedTaskList = [...taskList];
    if (value === "") {
      changedTaskList.splice(index, 1);
    } else {
      changedTaskList.splice(index, 1, { name: value, initializing: false });
    }
    setTaskList(changedTaskList);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            taskName={task.name}
            defaultIsEditing={task.initializing}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            onTaskComplete={() => onTaskComplete(index)}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

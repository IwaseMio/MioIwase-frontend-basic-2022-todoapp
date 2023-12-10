import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";
import COLOR from "../../../variables/color";
import AlertManager from "../AlertManager";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const AlertHandlerContext = useAlertHandlerContext();

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
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
      window.setTimeout(() => AlertHandlerContext.closeAlert(), 5000);
    } else {
      changedTaskList.splice[index] = { name: value, initializing: false };
      setTaskList(changedTaskList);
    }
  };

  useEffect(() => {
    const savedTaskList = localStorage.getItem("storage");
    if (savedTaskList !== null) {
      const parsedTaskList = JSON.parse(savedTaskList);
      setTaskList(parsedTaskList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(taskList));
  }, [taskList]);

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
        <AlertManager />
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
  align-items: flex-start;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-self: stretch;
`;

import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import styled from "styled-components";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    if (AlertHandlerContext.isActive === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);

  return (
    <AlertWrapper>
      {
        <Alert
          isActive={AlertHandlerContext.visible}
          alertText={AlertHandlerContext.errorText}
        />
      }
    </AlertWrapper>
  );
};

export default AlertManager;

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

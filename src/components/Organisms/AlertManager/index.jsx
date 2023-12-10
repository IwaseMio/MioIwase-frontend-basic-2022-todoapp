import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import styled from "styled-components";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    if (AlertHandlerContext && AlertHandlerContext.isActive === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);

  return (
    <AlertWrapper>
      {AlertHandlerContext && (
        <Alert
          isActive={AlertHandlerContext.isActive}
          alertText={AlertHandlerContext.alertText}
        />
      )}
    </AlertWrapper>
  );
};

export default AlertManager;

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

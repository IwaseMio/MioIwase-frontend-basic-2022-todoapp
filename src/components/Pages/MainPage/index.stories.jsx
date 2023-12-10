import { MainPage } from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";

export default { component: MainPage };

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];

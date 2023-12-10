import { TodoCard } from "./index";

export default { component: TodoCard };

const Template = (args) => <TodoCard {...args} />;

export const Default = Template.bind({});

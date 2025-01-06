import { Layout } from "./layout";

export default {
    title: "Layout",
    component: Layout,
    parameters: {
        layout: "fullscreen",
    },
};

export const Default = {
    args: {
        children: "Hello, world!",
    },
};

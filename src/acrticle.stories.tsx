import type { Meta, StoryObj } from "@storybook/react";
import { Article } from "./article";

const meta: Meta<typeof Article> = {
    component: Article,
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
    args: {
        children: (
            <>
                <p>"Hello, world!"</p>
                <p>"Hello, world, again!"</p>
            </>
        ),
    },
};

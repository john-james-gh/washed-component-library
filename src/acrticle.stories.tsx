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
                <Article.Header aria-labelledby="articleHeading">
                    <h1 id="articleHeading">Hello, world from Header!</h1>
                </Article.Header>
                <Article.Body>
                    <p>"Hello, world from Body!"</p>
                </Article.Body>
                <Article.Footer>
                    <p>"Hello, world from Footer!"</p>
                    <Article.Time>Jan 23 2025</Article.Time>
                </Article.Footer>
            </>
        ),
    },
};

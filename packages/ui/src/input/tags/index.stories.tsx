import React from "react";
import { ComponentMeta, Story } from "@storybook/react";

import { TagsInput as TagsInputComponent, TagsInputProps } from ".";

export default {
    title: "Input/Tags",
    component: TagsInputComponent,
} as ComponentMeta<typeof TagsInputComponent>;

const Template: Story<TagsInputProps> = (props: TagsInputProps) => (
    <TagsInputComponent {...props} />
);

export const Tags: Story<TagsInputProps> = Template.bind({});
Tags.args = {
    label: "Tags input",
    placeholder: "Tags input",
    value: ["tag1", "tag2"],
};

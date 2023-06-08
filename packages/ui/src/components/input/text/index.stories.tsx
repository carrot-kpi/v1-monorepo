import type { Meta, StoryObj } from "@storybook/react";

import { TextInput as TextInputComponent } from ".";

export default {
    title: "Input/Text",
    component: TextInputComponent,
} as Meta<typeof TextInputComponent>;

export const Text: StoryObj<typeof TextInputComponent> = {
    args: {
        label: "Text input",
        placeholder: "Text input",
    },
};

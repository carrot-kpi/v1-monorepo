import React from "react";
import { ComponentMeta, Story } from "@storybook/react";

import { ErrorFeedback as ErrorFeedbackComponent, ErrorFeedbackProps } from ".";

export default {
    title: "Feedback/Error Feedback",
    component: ErrorFeedbackComponent,
} as ComponentMeta<typeof ErrorFeedbackComponent>;

const Template: Story<ErrorFeedbackProps> = (props: ErrorFeedbackProps) => {
    return <ErrorFeedbackComponent {...props} />;
};

export const ErrorFeedback: Story<ErrorFeedbackProps> = Template.bind({});
ErrorFeedback.args = {
    messages: {
        title: "Something went wrong",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
    },
};
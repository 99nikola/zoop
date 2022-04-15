import { LinearProgress, styled, Typography } from "@mui/material";
import { ESteps, IStep } from "../../typescript/progressStepper.ts";
import { BsCircle } from "react-icons/bs";
import { Fragment } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

interface StepperProps {
    active: ESteps;
    progress: number;
    steps: IStep[];
}

const Stepper: React.FC<StepperProps> = (props) => {
    const width = useMemo(
        () => ({
            width: Math.round(100 / props.steps.length) + "%"
        }),
        [props.steps]
    );

    const RenderStep = useCallback(
        (step: IStep) => (
            <Fragment key={step.value}>
                <Flex position="relative">
                    {props.active === step.value && (
                        <RelativeText top="-120%" left={0}>
                            {props.progress + " Points"}
                        </RelativeText>
                    )}
                    <RelativeText top="100%">{step.label}</RelativeText>
                    <BsCircle />
                </Flex>
                <LinearProgress
                    variant="determinate"
                    value={
                        props.active === step.value
                            ? props.progress
                            : props.active > step.value
                            ? 100
                            : 0
                    }
                    sx={width}
                />
            </Fragment>
        ),
        [props.active, props.progress]
    );

    return <Flex>{props.steps.map(RenderStep)}</Flex>;
};

const Flex = styled("div")<{
    position?: any;
}>(({ position }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position
}));

const RelativeText = styled(Typography)<{
    top: string | number;
    left?: string | number;
}>(({ top, left }) => ({
    position: "absolute",
    width: "max-content",
    left,
    top
}));

export default Stepper;

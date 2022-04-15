import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { ESteps, IStep } from "../../typescript/progressStepper.ts";
import Stepper from "../molecules/Stepper";

const steps: IStep[] = [
    { value: ESteps.START },
    { label: "Silver", value: ESteps.SILVER },
    { label: "Gold", value: ESteps.GOLD },
    { label: "Diamond", value: ESteps.DIAMOND }
];

const ProgressStepper: React.FC = () => {
    const [activeStep, setActiveStep] = useState(ESteps.START);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress === 100) {
                if (activeStep === ESteps.DIAMOND) {
                    clearInterval(timer);
                    return;
                }
                setActiveStep(activeStep + 1);
                setProgress(0);
                return;
            }

            const diff = Math.round(Math.random() * 50);
            setProgress(Math.min(progress + diff, 100));
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, [progress, activeStep]);

    return (
        <Box sx={padding}>
            <Stepper active={activeStep} progress={progress} steps={steps} />
        </Box>
    );
};

const padding = {
    padding: "1.5rem .5rem"
};

export default ProgressStepper;

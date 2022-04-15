export enum ESteps {
    START,
    SILVER,
    GOLD,
    DIAMOND
}

export interface IStep {
    label?: string;
    value:  ESteps
}
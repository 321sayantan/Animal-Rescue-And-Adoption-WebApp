import { useState } from "react";

const useInput = (validateData) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateData(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = event => { setEnteredValue(event.target.value); }
    const valueInputBlurHandler = () => { setIsTouched(true); }
    const resetHandler = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        valueInputBlurHandler,
        resetHandler
    };
};

export default useInput;
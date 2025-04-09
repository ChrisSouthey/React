import { useState } from "react";
import { SignUpForm } from "./SignUpForm";

export const ShowFormButton = () => {
    const [ShowForm, setShowForm] = useState(false);

    return (
        <>
        <button onClick={() => { setShowForm(true) }}>Show Form</button>
        {ShowForm && <SignUpForm></SignUpForm>
        
        }
        
        </>
    );
}
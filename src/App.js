import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmission = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="App">
            <h1>fill this form to see the change</h1>
            {isSubmitted && (
                <div style={{ marginTop: 30, marginBottom: 30, color: "red" }}>
                    Form is submitted
                </div>
            )}
            <form onSubmit={handleFormSubmission}>
                <input type="text" placeholder="Enter your names" /> <br />
                <button type="submit">Submit the form</button>
            </form>
        </div>
    );
}

export default App;

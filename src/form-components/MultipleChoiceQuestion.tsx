import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function newAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Select value={answer} onChange={newAnswer}>
                    {options.map((ans) => (
                        <option key={ans} value={ans}>
                            {ans}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Your answer is: {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

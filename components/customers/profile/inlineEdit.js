import { useState } from "react";

const InlineEdit = ({ value, setValue }) => {
    const [editingValue, setEditingValue] = useState(value);

    const onChange = (event) => setEditingValue(event.target.value);

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
        }
    }

    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
            setEditingValue(value);
        } else {
            setValue(event.target.value) 
        }
    }

    return (
        <input
            style={{
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "28px",
                color: "black",
                border: '0'
            }}
            type="text"
            aria-label="Field name"
            value={editingValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    );
};

export default InlineEdit
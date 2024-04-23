import React from "react";

type Props = {
    nameField: string;
    setNameField: React.Dispatch<React.SetStateAction<string>>;
    setBartenders: React.Dispatch<React.SetStateAction<{ name: string; hours: number }[]>>;
    bartenders: { name: string; hours: number }[];
};

const AddBartender: React.FC<Props> = ({ nameField, setNameField, setBartenders, bartenders }: Props) => {
    class Bartender {
        constructor(public name: string, public hours: number = 0) {}
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameField(e.target.value);
    };
    
    const handleSubmit = () => {
        if (nameField.length) {
            const newBartender = new Bartender(nameField);
            setBartenders([...bartenders, newBartender]);
            setNameField('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && nameField.length) {
            handleSubmit();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={nameField}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSubmit}>Add Bartender</button>
        </div>
    );
};

export default AddBartender;
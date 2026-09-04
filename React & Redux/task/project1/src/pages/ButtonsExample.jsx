import { Pencil, TypeBold, TypeItalic, TypeStrikethrough, TypeUnderline } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ToggleButtonGroup } from 'react-bootstrap';

function ButtonsExample() {
    const [formats, setFormats] = useState(['bold']);

    const buttons = [
        { name: 'B', value: 'bold', icon: TypeBold },
        { name: 'I', value: 'italic', icon: TypeItalic },
        { name: 'U', value: 'underline', icon: TypeUnderline },
        { name: 'S', value: 'strike', icon: TypeStrikethrough },
    ];
    const getTextClass = () => {
        return `
        ${formats.includes('bold') ? 'fw-bold' : ''}
        ${formats.includes('italic') ? 'fst-italic' : ''}
        ${formats.includes('underline') ? 'text-decoration-underline' : ''}
        ${formats.includes('strike') ? 'text-decoration-line-through' : ''}
    `;
    };

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-3">Buttons</h3>
            <hr />

            <h4 className='text-secondary'>Button Styles</h4>
            <Stack direction="horizontal" gap={3} className='ms-3 mt-4'>
                <Button variant="primary">Normal Button</Button>
                <Button variant="primary"><Pencil /> Edit Record</Button>
                <Button variant="outline-primary">Outline Button</Button>
                <Button variant="primary" disabled>Disable Button</Button>
            </Stack>
            <hr />

            <h4 className='text-secondary'>Button Types</h4>
            <Stack direction="horizontal" gap={3} className='ms-3 mt-4'>
                <Button href="#">Link</Button>
                <Button type="submit">Button</Button>
                <Button as="input" type="button" value="Input" />
                <Button as="input" type="submit" value="Submit" />
                <Button as="input" type="reset" value="Reset" />
            </Stack>
            <hr />

            <h4 className='text-secondary'>Button Types</h4>
            <ToggleButtonGroup

                type="checkbox"
                value={formats}
                onChange={(val) => setFormats(val)}
                className=" overflow-hidden border border-primary ms-3 mt-4"
            >
                {buttons.map((btn, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`format-${idx}`}
                        value={btn.value}
                        variant="outline-primary"
                        className="px-3"
                    >
                        {React.createElement(btn.icon)}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <p className={`mt-3 ms-3 ${getTextClass()}`}>Here,the action of the above button will reflected</p>
        </div>
    );
}

export default ButtonsExample;
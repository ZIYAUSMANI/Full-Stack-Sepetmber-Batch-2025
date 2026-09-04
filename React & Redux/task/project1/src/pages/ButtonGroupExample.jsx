    import React, { useState } from 'react';
    import { TextCenter, TextLeft, TextRight } from 'react-bootstrap-icons';
    import Button from 'react-bootstrap/Button';
    import ButtonGroup from 'react-bootstrap/ButtonGroup';

    function ButtonGroupExample() {
        const [align, setAlign] = useState('left');

        const buttons = [
            { name: 'Left', value: 'left', icon: TextLeft },
            { name: 'Center', value: 'center', icon: TextCenter },
            { name: 'Right', value: 'end', icon: TextRight }
        ];

        const getTextClass = () => {
            return `text-${align}`;
        };

        return (
            <div className="container p-3 mt-2">
                <h3 className="text-start text-decoration-underline mb-3">ButtonGroups</h3>

                <ButtonGroup className='mt-3'>
                    {buttons.map((btn, idx) => (
                        <Button
                            key={idx}
                            variant="primary"
                            active={align === btn.value}
                            onClick={() => setAlign(btn.value)}
                        >
                            {React.createElement(btn.icon)}
                            {btn.name}

                        </Button>
                    ))}
                </ButtonGroup>

                <p className={`mt-3 ms-3 border p-3 ${getTextClass()}`}>
                    Here, the action of the above button will be reflected
                </p>
            </div>
        );
    }

    export default ButtonGroupExample;
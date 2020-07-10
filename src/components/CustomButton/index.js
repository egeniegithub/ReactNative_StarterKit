import React from 'react';
import {Button, Text} from 'native-base';

function CustomButton (props) {
    return (
        <Button style={[{justifyContent: 'center'},props.style]}>
            <Text>{props.text}</Text>
        </Button>
    )
}

export default CustomButton;
import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from './styles';

function CustomHeader(props) {
    return (
        <Header style={styles.header}>
            <Left>
                {props.leftIcon &&
                    <Button transparent >
                        <Icon name={props.leftIcon} style={styles.icon} />
                    </Button>
                }
            </Left>
            <Body>
                <Title style={styles.title}>{props.title}</Title>
            </Body>
            <Right>
                {props.rightIcon &&
                    <Button transparent>
                        <Icon name={props.rightIcon} style={styles.icon} />
                    </Button>
                }
            </Right>
        </Header>
    );
}

export default CustomHeader;
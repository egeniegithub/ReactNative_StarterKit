import { StyleSheet } from 'react-native';
import * as colors from '../../Theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        backgroundColor: colors.Green,
        width: '80%',
        marginTop: 15
    }
})

export default styles;
import {StyleSheet, Text, TextInput, View} from 'react-native';

export const Auth = props => {
    return(
        <View style={styles.auth}>
            <Text style={styles.title}>Авторизация</Text>
            <Text style={styles.authText}>С возвращением, пройдите авторизацию чтобы начать обучение</Text>
            <View style={{ textAlign: 'right' }}>
              <TextInput style={styles.inp} placeholder={'Адрес корпоративной почты'}/>
              <TextInput style={styles.inp} placeholder={'Пароль'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    auth: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    authText:{
        color: '#555555',
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 20,
        fontSize: 50,
        color: '#555555',

    },
    inp: {
        borderBottomWidth: 1,
        borderColor: '#00000040',
        margin: 10,
        width: 350,
        height: 40,
    }

});
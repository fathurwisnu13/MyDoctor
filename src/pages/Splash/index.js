import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets/illustration';

const Splash = ({navigation}) => {
    useEffect( ()=> {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Tanyadok</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'ghostwhite', 
        flex : 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize: 20, 
        fontWeight: '600',
        fontFamily: 'Nunito-SemiBold',
        color: '#112340', 
        marginTop: 20
    }
})

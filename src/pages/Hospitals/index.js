import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILHospitalBg } from '../../assets';
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils';
const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBg} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital/>
                <ListHospital/>
                <ListHospital/>
            </View>
        </View>
    );
};

export default Hospitals;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        marginTop: -30,
        flex: 1,
        paddingTop: 14
    }
});

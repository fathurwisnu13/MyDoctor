import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor5 } from '../../assets';
import { Header, ListDoctor } from '../../components'
import { colors } from '../../utils';

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Dokter Anak" onPress={() => navigation.goBack()} />
            <ListDoctor type={"next"} profile={DummyDoctor5} name="Nairobi Putri Hayza" desc="Wanita" onPress={() => navigation.navigate('Chatting')}/>
            <ListDoctor type={"next"} profile={DummyDoctor5} name="Nairobi Putri Hayza" desc="Wanita"/>
            <ListDoctor type={"next"} profile={DummyDoctor5} name="Nairobi Putri Hayza" desc="Wanita"/>
            <ListDoctor type={"next"} profile={DummyDoctor5} name="Nairobi Putri Hayza" desc="Wanita"/>
            <ListDoctor type={"next"} profile={DummyDoctor5} name="Nairobi Putri Hayza" desc="Wanita"/>
        </View>
    );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
});
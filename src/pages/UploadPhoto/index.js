import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { colors, fonts } from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

const UploadPhoto = ({navigation, route}) => {
    const {fullName, profession} = route.params
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto);
    const getImage = () => {
        launchImageLibrary({quality: 0.5, maxWidth: 200, maxHeight: 200 ,includeBase64: true}, response => {
            console.log('response: ', response);
            if(response.didCancel || response.errorMessage){
                showMessage({
                    message: 'oops, sepertinya anda tidak memilih fotonya?',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            }else{
                const source = {uri: response.assets[0].uri};
                setPhoto(source);
                setHasPhoto(true);
            }
        })
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Photo"/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button 
                        disable={!hasPhoto}
                        title="Upload and Continue" 
                        onPress={() => navigation.replace('MainApp')}
                    />
                    <Gap height={30}/>
                    <Link 
                        title="Skip for this" 
                        align="center" 
                        size={16} 
                        onPress={() => navigation.replace('MainApp')}
                    />
                </View>
            </View>
        </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    }
});

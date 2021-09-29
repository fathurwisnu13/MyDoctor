import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { Fire } from '../../config';
import { colors, getData, storeData } from '../../utils';
import { launchImageLibrary } from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        email: '',
    });
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            setPhoto({uri: res.photo})
            setProfile(data)
        });
    }, []);

    const update = () => {
        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: 'Password kurang dari 6 karakter',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: 'white'
                })
            } else {
                updatePassword();
                updateProfileData();
            }
        } else {
            updateProfileData();
        }
    };
    
    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(err => {
                    showMessage({
                        message: err.message,
                        type: 'default',
                        backgroundColor: colors.error,
                        color: 'white'
                    })
                });
            }
        });
    };
    
    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                storeData('user', data)
                .then(() => {
                    navigation.replace('MainApp');
                })
                .catch(() => {
                    showMessage({
                        message: 'Terjadi masalah',
                        type: 'default',
                        backgroundColor: colors.error,
                        color: 'white'
                    })
                });
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: 'white'
                })
            });
    };

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    }

    const getImage = () => {
        launchImageLibrary(
            {quality: 0.5, maxWidth: 200, maxHeight: 200 ,includeBase64: true}, 
            response => {
                console.log('response: ', response);
                if(response.didCancel || response.errorMessage){
                    showMessage({
                        message: 'oops, sepertinya anda tidak memilih fotonya?',
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white
                    });
                }else{
                    console.log('response getImage: ', response);
                    const source = {uri: response.assets[0].uri};

                    setPhotoForDB(`data:${response.assets[0].type};base64, ${response.assets[0].base64} `)
                    setPhoto(source);
                }
            }
        )
    }
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage}/>
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName', value)}/>
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)}/>
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable/>
                    <Gap height={24} />
                    <Input label="Password" value={password} secureTextEntry onChangeText={value => setPassword(value)}/>
                    <Gap height={24} />
                    <Button title="Save Profile" onPress={update}/>
                </View>            
            </ScrollView>
            
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
});

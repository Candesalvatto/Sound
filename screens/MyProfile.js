import { View, Image, StyleSheet, Text,  Pressable } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from '../service/user';
import { useEffect } from 'react';
import { deleteSession } from '../db';
import { clearUser } from '../features/auth/authSlice';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: user, isSuccess, isLoading, isError, error } = useGetUserQuery({ localId });
  const idToken = useSelector(state => state.auth.idToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) console.log(user);
    if (isError) console.error(error);
  }, [isSuccess, isError, user, error]);

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <LoadingSpinner/>
      </View>
    );
  }




  return (
    <View style={styles.container}>
      <View style={styles.containerBanner}>
        <Image 
          source={require('../assets/images/banner.png')}
          style={styles.banner}
          resizeMode='cover'
        />
      </View>
      <View style={styles.containerProfile}>
        <Image
          source={user.image ? { uri: user.image } : require("../assets/images/defaultProfile.png")}
          resizeMode='cover'
          style={styles.image}
        />
          <View style={styles.profileInfo}>
          <Text style={styles.profileText}>{user?.name || 'Nombre'} {user?.lastName || 'Apellido'}</Text>
          <Text style={styles.profileText}>{user?.dni || 'DNI'}</Text>
        </View>
        <SubmitButton title="Editar perfil" onPress={() => navigation.navigate('EditProfile')}/>   
        {idToken && (
          <Pressable onPress={onLogout} style={styles.logout}>
            <Text style={styles.close} >Cerrar Sesión</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1,
    marginTop: -15
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 0,
    borderRadius: 100
  },
  containerBanner: {
    width: '100%',
    height: 200,
    zIndex: 0
  },
  banner: {
    width: '100%',
    height: '100%'
  },
  logout: {
    color: '#151226',
    fontSize: 20
  },
  close:{
    color:"#151226",
    fontFamily: 'AuthorBold',
    fontSize:17,
marginVertical:80
  },
  flatList:{
    fontFamily: 'AuthorRegular',
    color: "red"
  },
  adress:{
    fontFamily: 'AuthorBold',
        color: "red"
  },

  profileText:{
textAlign:'center',
fontSize:30,
fontFamily: 'AuthorBold',
  }
});
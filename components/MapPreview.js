import { Image, View, StyleSheet } from 'react-native';
import { mapApiGoogle } from '../firebase/googleApiMap';

export const MapPreview = ({ location }) => {
  const mapStaticURL = `https://maps.googleapis.com/maps/api/staticmap?
    center=${location.latitude},${location.longitude}
    &zoom=13
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}
    &key=${mapApiGoogle}`;


  return (
    <View>
      <Image
        source={ { uri: mapStaticURL }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  }
});

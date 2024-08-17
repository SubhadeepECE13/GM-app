import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface props {
  heading: string;
  image: ImageSourcePropType;
  btnName: string;
  about: string;
}

const ImageView: React.FC<props> = ({heading, image, btnName, about}) => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 6}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headingText}> {heading}</Text>
        <TouchableOpacity>
          <Text style={[styles.text, {}]}> {btnName} &gt;</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.aboutText}>{about}</Text>
      <Image
        source={image}
        style={{width: '100%', height:'70%', marginTop: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  text: {
    textAlign: 'right',
    color: '#354169',
    fontWeight: 'bold',
    fontSize: 10,
  },
  aboutText: {
    color: '#3B3939',
    fontSize: 6,
  },
});

export default ImageView;

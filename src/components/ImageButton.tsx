import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface props {
  image: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const ImageButton: React.FC<props> = ({image, text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{marginHorizontal: 0, marginBottom: 25, borderColor: 'black', borderWidth: 1,}}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: 180,
              marginRight: 10,

              // padding:20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginTop: 10,
              // borderRadius: 20,
              objectFit: 'cover',
            }}
          />
          <Text style={styles.headingText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default ImageButton;

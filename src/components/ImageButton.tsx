import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
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
      style={{marginHorizontal: 80, marginVertical: 4}}>
      <Image
        source={image}
        style={{
          width: '120%',
          height: 120,
         marginRight:10,
        
          padding:20,
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:30,
          
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
  },
});

export default ImageButton;

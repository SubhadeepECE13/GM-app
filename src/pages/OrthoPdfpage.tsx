import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import BackButton from '../components/BackButton';
import Pdf from 'react-native-pdf';


const OrhtoPdfpage = () => {
  const {width, height} = Dimensions.get('window');
  const source = {uri: `bundle-assets://pdf/Ortho.pdf`, cache: true };
  console.log (source.uri);
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height,
        width,
      }}>
      <View
        style={{
          width,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <BackButton />
        <Text style={[styles.text, {}]}>PDF</Text>
        <TouchableOpacity style={{}}>
          {/* <Image source={ham_image} style={{ width: 30, height: 30, }} /> */}
        </TouchableOpacity>
      </View>
      <View>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />

        {/* <Image source={pdf_image} style={{ width: "90%", height: 550, marginHorizontal:20}} />
                <View style={{ height: 550,paddingHorizontal:20 }} >
                    <Text style={[styles.headingText]}>Therapeutic approaches in psychology</Text>
                    <Text style={[styles.welcomeText, { marginTop: 150 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.</Text>
                    <Text style={[styles.buttonText]}>Routledge Moduler Psychology</Text>
                </View>
                <View style={{ height: 750, paddingHorizontal:20}} >
                    <Text style={[styles.welcomeText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum neque nec vestibulum tincidunt. Aliquam erat volutpat.{"\n"} Duis semper lectus nec ligula fringilla, et feugiat justo sodales. Nullam at volutpat enim. Morbi at magna non magna mollis fermentum. Mauris nec felis lectus. Fusce cursus lectus in justo interdum, nec varius felis sollicitudin. Donec in vulputate lacus. Integer in diam et nulla scelerisque sodales. Aliquam fermentum orci nec augue scelerisque, nec accumsan lorem eleifend. Nam eget arcu at nisi faucibus vehicula. Nulla facilisi. Donec laoreet eros a sollicitudin lobortis. In scelerisque ex eu erat tincidunt, vel scelerisque ex porttitor.{"\n"} Sed feugiat, lacus ac congue ullamcorper, libero odio ultricies mi, non malesuada est felis ut libero. Sed blandit ligula eget nibh cursus, a dictum mauris vestibulum. Fusce nec magna vel ante pretium congue a a risus. Fusce efficitur lacus nisi, ac pretium odio scelerisque nec. Nam rutrum metus at felis auctor laoreet. Aenean vel semper nisl. Curabitur eget dignissim ipsum, a fermentum sapien. Nullam facilisis faucibus sapien at dictum. Suspendisse potenti.{"\n"} Donec suscipit cursus erat sit amet elementum. Morbi dapibus, nisi eu sollicitudin sodales, urna lectus vehicula erat, eget aliquam ligula risus et turpis. Nulla facilisi. Duis dapibus risus vel dui fermentum tincidunt. Praesent scelerisque orci in suscipit faucibus. Nulla facilisi.{"\n"}In lacinia metus id nulla lacinia, eget ullamcorper lacus dignissim. Nullam ac libero sed eros finibus cursus. Pellentesque in arcu ante. Etiam et enim ac sem elementum tempus. Donec feugiat, nisi at mollis interdum, lacus sapien vehicula sem, sed suscipit libero turpis a velit. Aenean dictum id magna ut fringilla. In vestibulum enim vel elit porttitor, a condimentum orci faucibus.{"\n"} Aliquam erat volutpat. Curabitur nec lectus in orci ultrices blandit.Cras rutrum metus at libero venenatis, a aliquet dolor varius. Nulla molestie lorem vel magna dictum, sed dictum urna facilisis. Nulla malesuada, ipsum ut efficitur lobortis, ligula nulla auctor tortor, in lobortis turpis enim ac neque. Aenean egestas eros a diam pulvinar cursus. Vivamus vel dui nec libero malesuada sodales. Phasellus vel risus ac enim posuere sollicitudin. Donec sit amet dui a purus pharetra interdum ut at enim. Sed luctus sollicitudin eros, sed vehicula ipsum ultricies in.
                     Integer porta odio ac sapien facilisis, non tincidunt lorem ornare. Aliquam erat volutpat. Aliquam quis ex a elit iaculis congue. Nunc cursus, mauris non vulputate fermentum, dui mauris dignissim metus, vel vestibulum mauris mi vel nulla. Aliquam erat volutpat. Cras at enim id nunc ullamcorper tempor. Mauris scelerisque vehicula tempor.{"\n"} Vivamus viverra dui vel ante placerat, eget sodales sapien gravida. Integer condimentum, ligula et volutpat consectetur, dui lorem malesuada arcu, id volutpat leo libero nec mi. Sed eget odio sem.Sed tempus sem at nibh feugiat, non vehicula augue fermentum. Duis fermentum, mi ac fermentum finibus, libero tortor vehicula enim, ac viverra arcu ligula non nisl.{"\n"} Integer in orci magna. Nullam vulputate sollicitudin sem. Etiam id purus convallis, pharetra nulla eget, tempus felis. In malesuada convallis nunc, quis vehicula orci iaculis et. Nulla at volutpat nisi. Donec aliquet semper arcu, id cursus ligula viverra id. Etiam eu varius justo. Nullam at lectus ut dolor pretium consectetur. Nulla non sagittis sem. Integer hendrerit libero eget nulla dictum, non vulputate lectus lacinia.</Text>
                    
                </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '400',
    color: 'black',
    textAlign: 'right',
    fontSize: 25,
    margin: 30,
    paddingHorizontal: 15,
    borderRightWidth: 7,
    borderBottomWidth: 1,

    borderColor: 'black',
  },
  text: {
    textAlign: 'right',
    color: '#354169',
    fontWeight: 'bold',
    fontSize: 25,
  },
  button: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  welcomeText: {
    fontWeight: 'bold',
    color: '#354169',
    textAlign: 'justify',
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}
});

export default OrhtoPdfpage;

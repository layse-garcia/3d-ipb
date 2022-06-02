
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerBG:{
      backgroundColor:'steelblue'
    },
    headerBold:{
      fontWeight:'bold'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#ecf0f1'
    },
    input:{
      width:250,
      height:44,
      padding:10,
      borderWidth:1,
      borderColor:'black',
      marginBottom:10
    },
    input_large:{
      width:250,
      height:250,
      padding:10,
      borderWidth:1,
      borderColor:'black',
      marginBottom:10
    },
    layer2:{
      flex:4,
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      backgroundColor:'powderblue'
    },
    header:{
      fontSize:30,
      fontWeight:'bold',
      marginBottom:40,
      marginTop:40
    },
    img:{
      width:200,
      height:200,
      borderRadius:100,
      backgroundColor:'#eee'

    },
    body:{
      textAlign:'justify'
    },
    layer3:{
      flex:1,
      flexDirection:'row'
    },
    layer4:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#21618C'
    },
    layer5:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'steelblue'
    },
    footer:{
      fontSize:16,
      fontWeight:'bold',
      color:"#fff"
    },
    flatlist:{
      width: '100%'
    },
    postListItem:{
      borderWidth: 1,
      borderColor:'#ccc',
      borderRadius: 6,
      margin:14,
      padding: 10,
      backgroundColor:'#fff'
    },
    postTitle:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:10,
    },
    postSeparator:{
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop:8,
        marginBottom: 8
    },
    postSeparatorLg:{
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginTop:40,
      marginBottom: 8
  },
  postButton:{
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
  postButton2x:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    marginTop:20,
    marginBottom:20
  },
  img_logo:{
    width:262,
    height:48
  }
  });

  export default styles;
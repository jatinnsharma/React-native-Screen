import {
    View,
    Text,
    StyleSheet,
    Touchable,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  const App = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}>Btn 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>Btn 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3}>
          <Text style={styles.btnText}>Btn 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn4}>
          <Text style={styles.btnText}>Btn 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn5}>
          <Text style={styles.btnText2}>Btn 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn6}>
          <Text style={styles.btnText2}>shadow-btn</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled style={styles.btn7}>
          <Text style={styles.btnText2}>disabled</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
    },
    btn1: {
      width:200,
      height:50,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'red',
      marginTop:20,
    },
    btn2: {
      width:"60%",
      height:"6%",
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'red',
      marginTop:20,
    },
    btn3: {
      width:"60%",
      height:"6%",
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'red',
      marginTop:20,
      borderRadius:10,
    },
    btn4: {
      width:"60%",
      height:"6%",
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'red',
      marginTop:20,
      borderTopRightRadius:30,
      borderBottomLeftRadius:30,
    },
    btn5: {
      width:"60%",
      height:"6%",
      alignItems: 'center',
      justifyContent:'center',
      borderColor:'red',
      borderWidth:1,
      marginTop:20,
      borderRadius:20,
  
    },
    btn6: {
      width:"60%",
      height:"6%",
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'orange',
      marginTop:20,
      elevation:10,
      borderRadius:20,
    },
    btn7: {
      width:"60%",
      height:"6%",
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'gray',
      marginTop:20,
      elevation:10,
      borderRadius:20,
    },
    btnText:{
      color:'white'
    },
    btnText2:{
      color:'red'
    }
  });
  
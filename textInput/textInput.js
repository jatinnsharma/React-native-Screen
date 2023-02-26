import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';

const App = () => {
  const ref1 = useRef();
  const [isFocused,setIsFocused] = useState(false)
  const [placeholder,setPlaceholder] = useState('Enter Password')
  const [name,setName] = useState('')
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Name" style={styles.input1} />
      <TextInput
        multiline
        placeholder="Enter Name"
        value={name}
        onChangeText={txt=>setName(txt)}
        style={styles.input2}
        onSubmitEditing={() => {
          ref1.current.focus();
        }}
      />
      <Text
      style={{
        alignSelf:'flex-end',
        color:'gray',
        marginRight:20,
        marginTop:10
      }}
      >
        {name.length+'/200'}
      </Text>
      <TextInput
        ref={ref1}
        placeholder="Enter Name"
        style={styles.input3}
        returnKeyType="next"
        onSubmitEditing={() => {
          Alert.alert('hello');
        }}
      />
      <TextInput style={styles.input3}
        placeholder="Enter Your Mobile Number"
        keyboardType="number-pad"
      />
      <View style={styles.input4}>
        <Text>{'👀'}</Text>
        <TextInput placeholder="Enter Password" />
      </View>
      <View style={styles.input3}>
        <TextInput placeholder={placeholder}
        onBlur={()=>{
          setIsFocused(false);
          setPlaceholder('Enter Password');
        }}
        onFocus={()=>{
          setIsFocused(true);
          setPlaceholder('');
        }}
        />
        {isFocused && (
          <Text
          style={{
            backgroundColor:'#FFF',
            paddingLeft:10,
            paddingRight:10,
            position:'absolute',
            left:20,
            top:-10,
            borderRadius:10,
          }}
          >
            {'Enter Password'}
          </Text>
        )}
        
      </View>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    width: '90%',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  input2: {
    width: '90%',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input3: {
    width: '90%',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  input4: {
    width: '90%',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    alignItems:'center',
    flexDirection:'row',
  },
});

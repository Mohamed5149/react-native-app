import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends Component {
  state = {
    city: '',
    cities: ['Portsaid', 'Alex']
  }

  submitHandler() {
    let cityCopy = this.state.city;
    let citiesCopy = this.state.cities;
    citiesCopy.push(cityCopy);
    this.setState({ cities: citiesCopy })
  }
  render() {
    let citiesOuput = this.state.cities.map(city => (
      <Text>{city}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Text Here"
            onChangeText={(text) => this.setState({ city: text })}
            value={this.state.city}
          />
          <Button
            title="Add"
            onPress={() => this.submitHandler()}
          />
        </View>
        <View>
          {/* {this.state.cities.map(city => {
            return (
              <Text>{city}</Text>
            )})} */}
            {citiesOuput}
        </View>
      </View>
        );
      }
    }
const styles = StyleSheet.create({
          container: {
          flex: 1,
        padding: 20,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
  input: {
          height: 40,
        width: 300
      },
  inputContainer: {
          flexDirection: "row",
        backgroundColor: 'red'
      }
    });

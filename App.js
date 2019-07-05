import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ListItem from './src/components/ListItem/listitem';

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

  pressHandler(i) {
    let citiesCopy = this.state.cities;
    citiesCopy.splice(i, 1);
    this.setState({
      cities: citiesCopy
    })
  }

  render() {
    let citiesOuput = this.state.cities.map((city, i) => (
      <ListItem key={i} city={city} pressHandler={() => this.pressHandler(i)}></ListItem>
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
            style={{ width: '30%' }}
            title="Add"
            onPress={() => this.submitHandler()}
          />
        </View>
        <View style={styles.listContainer}>
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
    width: '70%'
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'red'
  },
  listContainer: {
    width: "100%"
  }
});

import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchMeetups } from "./constants/api";

export default class App extends React.Component {

  static defaultProps = {
    fetchMeetups
  }

  state = {
    loading: false,
      meetups: []
  }

  async componentDidMount() {

    this.setState({loading: true});
    const data = await this.props.fetchMeetups();
    setTimeout( () => this.setState({ loading: false, meetups: data.meetups }),3000);

  }
  render() {
    if (this.state.loading) {
      return (
          <View style={styles.container}>
            <ActivityIndicator size={"small"}/>
          </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Meetup App</Text>
          {this.state.meetups.map((meetup,i) => (
              <Text key={i}>{meetup.title}</Text>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

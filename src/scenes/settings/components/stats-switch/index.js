import React from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import StatsSwitchContainer from './components/stats-switch-container';

class StatsSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSwitch: false,
    };
    this.onSwitchValueChange = this.onSwitchValueChange.bind(this);
  }

  onSwitchValueChange(e) {
    this.setState({
      toggleSwitch: e,
    });
  }

  render() {
    const { toggleSwitch } = this.state;
    return (
      <StatsSwitchContainer>
        <Text style={{fontSize: 16,color:"#999"}}>Include tracking stats</Text>
        <Switch value={toggleSwitch} onValueChange={this.onSwitchValueChange} disabled />
      </StatsSwitchContainer>
    );
  }
}


export default StatsSwitch;

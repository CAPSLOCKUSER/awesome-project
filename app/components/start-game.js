import React, {
  Component,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  NativeModules
} from 'react-native';

const UnityBridge = NativeModules.UnityBridge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCCCC',
    paddingHorizontal: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    textAlign: 'center',
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 2
  }
});

export default class StartGame extends Component {
  onStartShouldSetResponderHandler() {
    console.log('# onStartShouldSetResponderHandler');
    return true;
  }

  onResponderGrantHandler() {
    console.log('# onResponderGrantHandler');
  }

  onResponderReject() {
    console.log('# onResponderReject');
  }

  onResponderMoveHandler(evt) {
    console.log('# onResponderMoveHandler');
    console.log(evt.nativeEvent);
  }

  onResponderReleaseHandler() {
    console.log('# onResponderRelease');
  }

  onMoveShouldSetResponderHandler() {
    console.log('# onMoveShouldSetResponderHandler');
  }

  onResponderTerminationRequestHandler() {
    console.log('# onResponderTerminationRequestHandler');
  }

  onResponderTerminateHandler() {
    console.log('# onResponderTerminateHandler');
  }

  onStartShouldSetResponderCaptureHandler() {
    console.log('# onStartShouldSetResponderCaptureHandler');
  }

  buttonClicked() {
    console.log('----> button clicked');
    UnityBridge.showUnityWindow();
  }

  render() {
    return (
      <View style={styles.container}
          /*onStartShouldSetResponderCapture={this.onStartShouldSetResponderCaptureHandler}
          onStartShouldSetResponder={this.onStartShouldSetResponderHandler}
          onMoveShouldSetResponder={this.onMoveShouldSetResponderHandler}
          onResponderGrant={this.onResponderGrantHandler}
          onResponderReject={this.onResponderRejectHandler}
          onResponderMove={this.onResponderMoveHandler}
          onResponderRelease={this.onResponderReleaseHandler}
          onResponderTerminationRequest={this.onResponderTerminationRequestHandler}
          onResponderTerminate={this.onResponderTerminateHandler}*/
      >
        <Text style={styles.welcome}>
          Gravity Master
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonClicked.bind(this)}
        >
          <Text>Play</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
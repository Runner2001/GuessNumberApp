import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [round, setRound] = useState(0)
  const [dataLoad, setDataLoad] = useState(false);

  if (!dataLoad) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoad(true)} onError={(err) => console.log(err)} />
  }

  const startGameHandler = (selectNumber) => {
    setUserNumber(selectNumber)
  }

  const restartGame = () => {
    setRound(0);
    setUserNumber(null)
  }

  const gameOverHandler = (numofRound) => {
    setRound(numofRound)
  }

  return (
    <View style={styles.screen}>
      <Header headerTitle="Guess Number" />
      {!userNumber ? <StartGameScreen onStartHandler={startGameHandler} /> :
        (userNumber && round <= 0 ? <GameScreen userValue={userNumber} gameOverHandler={gameOverHandler} /> : <GameOverScreen round={round} restartGame={restartGame} />)}
      {/* <StatusBar style='auto' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

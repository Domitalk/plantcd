import './App.css';
import { Route, Switch } from 'react-router-dom';
// just to test state everytime 
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


import NavigationBar from './components/NavigationBar.js'
import Plants from './components/Plants.js'
import HomeScreen from './components/HomeScreen.js'
import Profile from './components/Profile.js'

function App() {
  // just to test state everytime 
  const testingState = useSelector(state => state)
  useEffect(() => {
    console.log("App.js state", testingState)
  })

  return (
    <>
      <NavigationBar />
      {/* add some fillers in here so we can see scrolling  */}
      <Switch>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
      {/* <div style={{ height: "500px", width: "500px", background: "#000000" }}></div>
      <div style={{ height: "500px", width: "500px", background: "#000000" }}></div>
      <div style={{ height: "500px", width: "500px", background: "#000000" }}></div> */}
    </>
  );
}

export default App;

import './App.css';
import NavigationBar from './components/NavigationBar.js'

function App() {
  return (
    <>
      <NavigationBar />
      {/* add some fillers in here so we can see scrolling  */}
      <div style={{ height: "500px", width: "500px", background: "#000000" }}></div>
      <div style={{ height: "500px", width: "500px", background: "#000000" }}></div>
      <div style={{ height: "500px", width: "500px", background: "#000000" }}></div>

    </>
  );
}

export default App;

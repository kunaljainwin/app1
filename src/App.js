
import './App.css';
import Footer from './components/footer';
import NavigationBar from './components/navigationBar';
function newApp() {
 
  return (
    <div className="App">

      <header className="App-header">
        <NavigationBar />
        

        <img src={"./img/me.jpg"} className="App-logo" alt="logo" />

        <Footer/>
      </header>
    </div>
  );
}
export default newApp;
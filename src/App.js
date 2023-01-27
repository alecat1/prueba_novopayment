import './App.css';
import MainPage from './components/main-page/MainPage';
import image from './main_page_background.png'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <MainPage/>
    </div>
  );
}

export default App;

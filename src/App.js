import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginRegister from './components/LoginRegister';
import Forget from './components/Forget';
import Home from './components/Home';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';


function App() {

  

  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );

}
export default App;

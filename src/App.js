import { useEffect } from 'react';
import './App.css';
import Cookies from 'js-cookie';

function App() {
  const session = Cookies.get('session');
  useEffect(() => {
    const sendMessageToNative = (message) => {
      window.ReactNativeWebView?.postMessage(message);
    };
    sendMessageToNative('Hello, React Native!');
  }, []);
  return (
    <div className='App'>
      {session ? <h1>Hello</h1> : <span>Invalid Token</span>}
    </div>
  );
}

export default App;

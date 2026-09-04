import { RouterProvider } from 'react-router-dom';
import { router } from './routes/RouterData'; // Adjust path to where your router file is located
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App; 
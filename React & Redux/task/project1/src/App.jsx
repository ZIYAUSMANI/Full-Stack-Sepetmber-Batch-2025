import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { router } from './Router/RouterData';
import { RouterProvider } from 'react-router-dom';
import WishlistProvider from './Context/WishlistProvider';

function App() {
  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  );
}

export default App;
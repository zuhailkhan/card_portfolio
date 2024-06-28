import CardLayout from '@/Layouts/CardLayout';
import AboutPage from '@/pages/About';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <CardLayout />,
    children: [
      {
        path: '/',
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
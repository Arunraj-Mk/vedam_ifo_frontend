import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}

      {/* Private Routes - With Sidebar & Header */}
      <Route element={<PrivateRoute />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;


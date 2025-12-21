import { Routes, Route } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Private routes */}
      <Route path="/dashboard/*" element={<PrivateRoutes />} />
      {/* Public routes - catch all other paths */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  )
}

export default AppRoutes

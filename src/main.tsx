import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import PurchasePolicy from './pages/PurchasePolicy.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Layout from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="chinh-sach-mua-hang" element={<PurchasePolicy />} />
          <Route path="chinh-sach-bao-mat" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

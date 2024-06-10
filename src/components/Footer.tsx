import React from 'react'
import { Layout } from 'antd'
import './Footer.css'

const { Footer } = Layout

const AppFooter: React.FC = () => {
  return <Footer className="footer">CV ©{new Date().getFullYear()} Created by Murad Gakhramanov</Footer>
}

export default AppFooter

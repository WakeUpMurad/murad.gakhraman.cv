import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import { TinyColor } from '@ctrl/tinycolor'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Projects from './pages/Projects'
import './App.css'

const { Content } = Layout

const colors = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516']

const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).lighten(5).toString())
const getActiveColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(5).toString())

const App: React.FC = () => {
  return (
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#e75516',
            borderRadius: 2,
            colorBgContainer: '#fff',
          },
          components: {
            Layout: {},
            Menu: {},
            Button: {
              colorPrimary: `linear-gradient(90deg, ${colors.join(', ')})`,
              colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors).join(', ')})`,
              colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors).join(', ')})`,
              lineWidth: 0,
            },
            Tabs: {
              controlHeight: 100,
              colorBorder: 'none',
              colorBorderSecondary: 'none',
              itemColor: 'none',
              colorBgBase: 'none',
              colorBgContainer: 'white',
              margin: 0,
            },
          },
        }}
      >
        <Layout>
          <Header />
          <Content>
            <Routes>
              <Route
                path="/murad.gakhraman.cv"
                element={<Home />}
              />
              <Route
                path="/projects"
                element={<Projects />}
              />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </ConfigProvider>
    </Router>
  )
}

export default App

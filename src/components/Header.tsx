import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.svg'
import './Header.css'

const Header: React.FC = () => {
  const location = useLocation()
  const [current, setCurrent] = useState(location.pathname)

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  const menuItems = [
    {
      key: 'home',
      label: (
        <Link
          to="/murad.gakhraman.cv"
          id="home"
        >
          Home
        </Link>
      ),
    },
    {
      key: 'projects',
      label: (
        <Link
          to="/projects"
          id="projects"
        >
          Projects
        </Link>
      ),
    },
  ]

  const openKeys = menuItems.map((item) => item.key)
  console.log(openKeys)

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => setCurrent('/murad.gakhraman.cv')}
      >
        <Link to="/murad.gakhraman.cv">
          <img
            src={logo}
            alt="img"
          />
        </Link>
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        defaultSelectedKeys={['home']}
        style={{ background: 'none', border: 'none' }}
        items={menuItems}
        onClick={handleClick}
      />
    </div>
  )
}

export default Header

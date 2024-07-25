import React from 'react'
import { SolutionOutlined, JavaScriptOutlined, GithubOutlined, AuditOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Image, Tabs } from 'antd'
import Education from './Tabs/Education'
import AboutAndSkills from './Tabs/AboutAndSkills'
import Projects from '../Projects'
import Experience from './Tabs/Experience'
import Contacts from './Tabs/Contacts'
import img from '../../images/mg.png'
import './Home.css'

const tabs = [
  {
    label: (
      <>
        <JavaScriptOutlined />
        <span className="home-tab-title">Skills</span>
      </>
    ),
    children: AboutAndSkills,
  },
  {
    label: (
      <>
        <SolutionOutlined />
        <span className="home-tab-title">Education</span>
      </>
    ),
    children: Education,
  },
  {
    label: (
      <>
        <GithubOutlined />
        <span className="home-tab-title">Projects</span>
      </>
    ),
    children: Projects,
  },
  {
    label: (
      <>
        <AuditOutlined />
        <span className="home-tab-title">Experience</span>
      </>
    ),
    children: Experience,
  },
  {
    label: (
      <>
        <WhatsAppOutlined />
        <span className="home-tab-title">Contacts</span>
      </>
    ),
    children: Contacts,
  },
]

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-body">
        <h1 className="home-title">FRONTEND DEVELOPER</h1>
        <Image
          className="home-image"
          width={'inherit'}
          src={img}
        />
      </div>
      <Tabs
        type="card"
        rootClassName="home-tabs"
        tabPosition="right"
        items={tabs.map((tab, i) => {
          const id = String(i + 1)
          return {
            destroyInactiveTabPane: true,
            closable: true,
            className: 'home-tab',
            label: tab.label,
            key: id,
            children: <tab.children />,
          }
        })}
      />
    </section>
  )
}

export default Home

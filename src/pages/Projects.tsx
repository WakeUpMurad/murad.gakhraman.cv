import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import { LikeFilled, LikeOutlined, LinkOutlined } from '@ant-design/icons'
import './Projects.css'
import greenCorp from '../images/projects/greenCorp.jpeg'
import strongPassGen from '../images/projects/strongPassGen.jpeg'
import taskApp from '../images/projects/taskApp.jpeg'
import landBEM from '../images/projects/landBEM.jpeg'
import bookLibrary from '../images/projects/bookLibrary.jpeg'
import todoApp from '../images/projects/todoApp.jpeg'
import cryptoExchanger from '../images/projects/cryptoExchanger.jpeg'
import vue3PostsApp from '../images/projects/vue3PostsApp.jpeg'
import weatherApp from '../images/projects/weatherApp.jpeg'
import EventsReactTypescript from '../images/projects/EventsReactTypescript.jpeg'

const { Meta } = Card

type Project = {
  id: number
  title: string
  description: string
  link: string
  image: string
  like: boolean
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Green Corp landing',
    description: 'Pure JavaScript, HTML, CSS',
    link: 'https://wakeupmurad.github.io/green-corp-landing/',
    image: greenCorp,
    like: true,
  },
  {
    id: 2,
    title: 'Strong password generator',
    description: 'Pure JavaScript, HTML, CSS',
    link: 'https://wakeupmurad.github.io/Strong-Password-Generator/',
    image: strongPassGen,
    like: false,
  },
  {
    id: 3,
    title: 'Todo task manager',
    description: 'Pure JavaScript, HTML, CSS',
    link: 'https://wakeupmurad.github.io/DOM-task-todo-pureJS/',
    image: taskApp,
    like: false,
  },
  {
    id: 4,
    title: 'Landing page using BEM',
    description: 'Pure JavaScript, HTML, CSS',
    link: 'https://wakeupmurad.github.io/BEM_landing/',
    image: landBEM,
    like: false,
  },
  {
    id: 5,
    title: 'Book library app',
    description: 'React, Redux library',
    link: 'https://wakeupmurad.github.io/book-library-app_react_redux/',
    image: bookLibrary,
    like: false,
  },
  {
    id: 6,
    title: 'Todo app',
    description: 'React, Redux library',
    link: 'https://wakeupmurad.github.io/react-todo-app/',
    image: todoApp,
    like: false,
  },
  {
    id: 7,
    title: 'Crypto Exchanger app',
    description: 'VUE3 library',
    link: 'https://github.com/WakeUpMurad/vue-crypto-exchanger',
    image: cryptoExchanger,
    like: false,
  },
  {
    id: 8,
    title: 'Posts App',
    description: 'VUE3 library',
    link: '  https://github.com/WakeUpMurad/vue3-course/',
    image: vue3PostsApp,
    like: false,
  },
  {
    id: 9,
    title: 'Weather app',
    description: 'VUE3 library',
    link: 'https://github.com/WakeUpMurad/vue-weather-app/',
    image: weatherApp,
    like: false,
  },
  {
    id: 10,
    title: 'Book library app',
    description: 'React-TypeScript library',
    link: 'https://github.com/WakeUpMurad/ulbi-tv-react-js-pro',
    image: EventsReactTypescript,
    like: false,
  },
]

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([] as Project[])

  useEffect(() => {
    setProjects(() => projectsData)
  }, [])

  const handleLike = (id: number) => {
    const newProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, like: !project.like }
      }
      return project
    })
    setProjects(newProjects)
  }

  return (
    <section className="projects">
      <h2 className="projects-title">Мои Проекты</h2>
      <div className="projects-body">
        <Row className="projects-row ">
          {projects.length > 0 &&
            projects.map((project) => (
              <Col
                key={String(project.id)}
                className="column"
                xs={{ flex: '100%' }}
                sm={{ flex: '50%' }}
                md={{ flex: '40%' }}
                lg={{ flex: '20%' }}
                xl={{ flex: '10%' }}
              >
                <Card
                  cover={
                    <img
                      alt="img"
                      src={project.image}
                    />
                  }
                  actions={[
                    project.like ? (
                      <LikeFilled
                        key="likeFill"
                        style={{ color: '#e75516' }}
                        onClick={() => handleLike(project.id)}
                      />
                    ) : (
                      <LikeOutlined
                        key="likeEmpty"
                        onClick={() => handleLike(project.id)}
                      />
                    ),
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkOutlined key="link" />
                    </a>,
                  ]}
                >
                  <Meta
                    title={project.title}
                    description={project.description}
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  )
}

export default Projects

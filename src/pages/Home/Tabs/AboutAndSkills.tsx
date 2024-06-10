import React from 'react'
import { Row, Col, Card } from 'antd'
import { JavaScriptOutlined, Html5Outlined, GithubOutlined, GitlabOutlined, DockerOutlined } from '@ant-design/icons'
import './AboutAndSkills.css'

const skills = [
  { id: 1, title: 'JavaScript', icon: <JavaScriptOutlined /> },
  { id: 2, title: 'HTML', icon: <Html5Outlined /> },
  { id: 3, title: 'CSS', icon: <Html5Outlined /> },
  { id: 4, title: 'GitLab', icon: <GitlabOutlined /> },
  { id: 5, title: 'GitHub', icon: <GithubOutlined /> },
  { id: 6, title: 'Docker', icon: <DockerOutlined /> },
  { id: 7, title: 'React', icon: <Html5Outlined /> },
  { id: 8, title: 'Next.js', icon: <Html5Outlined /> },
  { id: 9, title: 'Node.js', icon: <Html5Outlined /> },
]
const AboutAndSkills: React.FC = () => {
  return (
    <section className="aboutAndSkills">
      <h2 className="aboutAndSkills-title">Murad Gakhramanov</h2>
      <div className="aboutAndSkills-body">
        <Card
          title={'Обо мне'}
          bordered={false}
          className="aboutAndSkills-card"
        >
          <p className="about-description">
            Cпециалист с 10-летним стажем работы в Сбербанке, где занимал должность эксперта. Изучаю веб разработку с{' '}
            <b>
              <i>2021</i> года
            </b>
            . Имею более года коммерческой разработки. Эксперт с опытом и навыками в области фронтенд разработки. Владею высоким уровнем навыков в{' '}
            <b>JavaScript, TypeScript, ReactJS, VUE, Redux, HTML, CSS</b>. Обладаю дипломом FullStack Web Developer и сертификатами по веб-разработке.
          </p>
        </Card>

        <h2 className="aboutAndSkills-subtitle">Skills</h2>
        <Row className="aboutAndSkills-row">
          {skills.map((skill) => (
            <Col
              key={skill.id}
              xs={{ flex: '100%' }}
              sm={{ flex: '50%' }}
              md={{ flex: '40%' }}
              lg={{ flex: '20%' }}
              xl={{ flex: '10%' }}
            >
              <Card
                key={skill.id}
                title={skill.title}
                bordered={false}
                className="aboutAndSkills-card"
              >
                <span className="aboutAndSkills-icon">{skill.icon}</span>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default AboutAndSkills

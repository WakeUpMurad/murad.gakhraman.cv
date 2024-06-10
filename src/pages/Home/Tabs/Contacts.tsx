import { Card, Col, Row } from 'antd'
import { LinkedinOutlined, GithubOutlined, MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import './Contacts.css'

const contacts = [
  { id: 1, title: 'Telegram', body: 'murad_savage', link: 'https://t.me/murad_savage', icon: <SendOutlined /> },
  { id: 2, title: 'LinkedIn', body: 'murad-gakhramanov', link: 'https://linkedin.com/in/murad-gakhramanov/', icon: <LinkedinOutlined /> },
  { id: 3, title: 'GitHub', body: 'WakeUpMurad', link: 'https://github.com/WakeUpMurad', icon: <GithubOutlined /> },
  { id: 4, title: 'Email', body: 'my_pad@mail.ru', link: 'my_pad@mail.ru', icon: <MailOutlined /> },
  { id: 5, title: 'Phone', body: '+7 (953) 4215577', link: '+7 (953) 4215577', icon: <PhoneOutlined /> },
]
const Contacts: React.FC = () => {
  return (
    <section className="contacts">
      <h2 className="contacts-title">Контакты</h2>
      <div className="contacts-body">
        <Row className="contacts-row">
          {contacts.map((contact) => (
            <Col
              key={contact.id}
              xs={{ flex: '100%' }}
              sm={{ flex: '50%' }}
              md={{ flex: '40%' }}
              lg={{ flex: '20%' }}
              xl={{ flex: '10%' }}
            >
              <Card
                title={contact.title}
                bordered={false}
                className="contacts-card"
              >
                <a
                  href={contact.link}
                  className="contacts-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon} {contact.body}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Contacts

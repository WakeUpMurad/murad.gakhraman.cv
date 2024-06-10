import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import { LikeFilled, LikeOutlined, LinkOutlined } from '@ant-design/icons'
import avtonomn from '../../../images/Dipl&Cert/avtonomn.jpg'
import HTML_solo from '../../../images/Dipl&Cert/HTML_solo.jpg'
import JS_solo from '../../../images/Dipl&Cert/JS_solo.jpg'
import osnAlgor from '../../../images/Dipl&Cert/osnAlgor.jpg'
import osnHTML_CSS from '../../../images/Dipl&Cert/osnHTML_CSS.jpg'
import osnPrJS1 from '../../../images/Dipl&Cert/osnPrJS1.jpg'
import osnPrJS2 from '../../../images/Dipl&Cert/osnPrJS2.jpg'
import osnProg from '../../../images/Dipl&Cert/osnProg.jpg'
import React_Redux_solo from '../../../images/Dipl&Cert/React_Redux_Sololearn.jpg'
import upravWebpageJS from '../../../images/Dipl&Cert/upravWebpageJS.jpg'
import diplAcademyTopIT from '../../../images/Dipl&Cert/diplAcademyTopIT.jpeg'
import html_css_js_coursera from '../../../images/Dipl&Cert/html_css_js_coursera.jpeg'
import './Education.css'

const { Meta } = Card

type Sertificates = {
  id: number
  title: string
  link: string
  img: string
  like: boolean
}

const higherEducation = [
  { id: 1, institution: 'Компьютерная академия «TOP IT» (ШАГ)', specialization: 'Full-Stack WEB developer', link: 'https://tula.top-academy.ru/' },
  { id: 2, institution: 'Тульский государственный университет', specialization: 'Экономика и управление в машиностроении', link: 'https://tulsu.ru/' },
]
const sertificatesData: Sertificates[] = [
  {
    id: 1,
    title: 'Diploma Development and Promotion of Web Projects. TOP IT',
    link: 'https://drive.google.com/file/d/1Xf6RQyi25BG1F7R2sudLCbQT3dgZXSyN/view?usp=share_link',
    img: diplAcademyTopIT,
    like: false,
  },
  {
    id: 2,
    title: 'HTML, CSS, and Javascript for Web Developers. Coursera',
    link: 'https://drive.google.com/file/d/1p9ZvM2_VjSRDR4akSMgqWCvrciwZ6OsS/view',
    img: html_css_js_coursera,
    like: false,
  },
  {
    id: 3,
    title: 'Основы решения алгоритмических задач. Sber University',
    link: 'https://drive.google.com/file/d/1ZVBiM4A787YHw1SsdBe6aB-gogyb17hQ/view',
    img: osnAlgor,
    like: false,
  },
  {
    id: 4,
    title: 'Управление веб-страницей с помощью JavaScript. Sber University',
    link: 'https://drive.google.com/file/d/1cNUOMA6koVKtJvCzQL0O1vvOlIy7n9D5/view',
    img: upravWebpageJS,
    like: false,
  },
  {
    id: 5,
    title: 'Основы программирования на JavaScript II. Sber University',
    link: 'https://drive.google.com/file/d/1hy1UtrkvEj4eqADx2_7eM6g71bYG9jHD/view',
    img: osnPrJS2,
    like: false,
  },
  {
    id: 6,
    title: 'Основы программирования на JavaScript I. Sber University',
    link: 'https://drive.google.com/file/d/15--79TDuUD317txEWpWItHwWkxb6UQfF/view',
    img: osnPrJS1,
    like: false,
  },
  {
    id: 7,
    title: 'Основы HTML и CSS. Sber University',
    link: 'https://drive.google.com/file/d/19BLnAYgXrI3ZaXkh-fKBP2QWIM73SLOn/view',
    img: osnHTML_CSS,
    like: false,
  },
  {
    id: 8,
    title: 'Основы програмирования. Sber University',
    link: 'https://drive.google.com/file/d/1EFJXciyCeRoo8q2aW-PJ6o45IP7UkFxh/view',
    img: osnProg,
    like: false,
  },
  {
    id: 9,
    title: 'Автономные системыю Искуственный интеллект и Робототехника. Sber University',
    link: 'https://drive.google.com/file/d/1fOnvxPbyJRgNlkJX39UwLNBD_fxdZNmG/view',
    img: avtonomn,
    like: false,
  },
  {
    id: 10,
    title: 'React + Redux. Sololearn',
    link: 'https://drive.google.com/file/d/1b0njxm_y7JvGoirCV3yyt-Ba1eH6w4aC/view',
    img: React_Redux_solo,
    like: false,
  },
  {
    id: 11,
    title: 'JavaScript. Sololearn',
    link: 'https://drive.google.com/file/d/1Q64e_tPDAmMx51agwPijnzbi2-eJarN8/view',
    img: JS_solo,
    like: false,
  },
  {
    id: 12,
    title: 'HTML. Sololearn',
    link: 'https://drive.google.com/file/d/1D-3mEPLW0Q7FGyFs2J44k1WITUOfGraH/view',
    img: HTML_solo,
    like: false,
  },
]

const Education: React.FC = () => {
  const [sertificates, setSertificates] = useState([] as Sertificates[])

  useEffect(() => {
    setSertificates(() => sertificatesData)
  }, [])

  const handleLike = (id: number) => {
    const newSertificates = sertificates.filter((sertificates) => {
      if (sertificates.id === id) {
        sertificates.like = !sertificates.like
        return sertificates
      }
      return sertificates
    })
    setSertificates(() => newSertificates)
  }

  return (
    <section className="education">
      <h2 className="education-title">Образование</h2>
      <div className="education-body">
        <h3 className="education-subtitle">Высшее образование</h3>
        <div className="higherEducation">
          <Row className="education-row">
            {higherEducation.map((higer) => (
              <Col
                key={higer.id}
                xs={{ flex: '100%' }}
                sm={{ flex: '50%' }}
                md={{ flex: '40%' }}
                lg={{ flex: '20%' }}
                xl={{ flex: '10%' }}
              >
                <Card
                  title={higer.institution}
                  bordered={false}
                  className="education-card"
                >
                  {higer.specialization}
                  <a
                    href={higer.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkOutlined key="link" />
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="sertificates">
          <h3 className="education-subtitle">Дипломы и сертификаты</h3>
          <Row className="education-row">
            {sertificates.length > 0 &&
              sertificates.map((sertificates) => (
                <Col
                  key={String(sertificates.id)}
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
                        src={sertificates.img}
                      />
                    }
                    actions={[
                      sertificates.like ? (
                        <LikeFilled
                          key="likeFill"
                          style={{ color: '#e75516' }}
                          onClick={() => handleLike(sertificates.id)}
                        />
                      ) : (
                        <LikeOutlined
                          key="likeEmpty"
                          onClick={() => handleLike(sertificates.id)}
                        />
                      ),
                      <a
                        href={sertificates.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkOutlined key="link" />
                      </a>,
                    ]}
                  >
                    <Meta title={sertificates.title} />
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Education

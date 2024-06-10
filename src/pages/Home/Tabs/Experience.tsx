import React from 'react'
import { Card, Col, Row } from 'antd'
import './Experience.css'

const jobs = [
  {
    id: 1,
    position: 'Эксперт',
    company: 'Сбербанк',
    department: 'Центра управления местами размещения',
    period: '04.2023 - 04.2024',
    description: `<ul>
        <li>* Разработка пользовательских интерфейсов, отдельных UI компонентов с применение библиотеки React, JS/Redux.</li>
        <li>* Проведение Daily с разработчиками и владельцем продукта.</li>
        <li>* Участие в спринтах и написание документации на Confluence.</li>
        <li>* Тестирование новой АС Парус и проведение обучения пользователей</li>
      </ul>`,
  },
  {
    id: 2,
    position: 'Эксперт',
    company: 'Сбербанк',
    department: 'Центра управления местами размещения',
    period: '12.2019 - 04.2023',
    description: `<ul>
      <li>* Анализ и координация мероприятий по перемещению и размещению УС.</li>
      <li>* Координирование выполнения планов по территории, на еженедельной основе в формате ВКС.</li>
      <li>* Участие в еженедельных ТКС по выполнению общих бизнес-показателей по размещению УС и ведение соответствующей отчётности по квартальным и годовым показетелям по России.</li>
      <li>* Управление местами размещения устройств самообслуживания УС (Банкоматы, Постаматы и т.п.)</li>
    </ul>`,
  },
  {
    id: 3,
    position: 'Главный инженер',
    company: 'Сбербанк',
    department: 'Межрегиональный центр технической поддержки',
    period: '05.2016 - 12.2019',
    description: `<ul>
      <li>* Предоставление прав доступа в банковское ПО. Решение инцидентов по доступам в ПО. </li>
      <li>* Консультирование сотрудников по входу в ПО. Работа с обращениями сотрудников банка.</li>
      <li>* Работа с обращениями внутренних клиентов.</li>
    </ul>`,
  },
  {
    id: 4,
    position: 'Ведущий специалист',
    company: 'Сбербанк',
    department: 'Многофункциональный сервисный центр',
    period: '03.2014 - 05.2016',
    description: `<ul>
      <li>* Работа в банковском ПО с нормативно-справочной информацией (НСИ в Сбербанк Онлайн).</li>
      <li>* Управление группой нештатного редактирование счетов физических лиц.</li>
      <li>* Общее распределение задач по группе, контроль исполнения и результатов.</li>
      <li>* Работа с обращениями внутренних клиентов.</li>
    </ul>`,
  },
]

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">Опыт работы</h2>
      <div className="experience-body">
        <Row className="experience-row">
          {jobs.map((job) => (
            <Col
              key={job.id}
              xs={{ flex: '100%' }}
              sm={{ flex: '50%' }}
              md={{ flex: '40%' }}
              lg={{ flex: '20%' }}
              xl={{ flex: '10%' }}
            >
              <Card
                title={job.position + ' - ' + job.department}
                bordered={false}
                className="experience-card"
              >
                <div
                  className="experience-description"
                  dangerouslySetInnerHTML={{
                    __html: `<p class="experience-companyAndperiod">${job.company} ${job.period}</p><br/>${job.description}`,
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Experience

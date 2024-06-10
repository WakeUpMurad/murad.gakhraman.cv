import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <div className="about">
      <h2 className="about-title">Обо мне</h2>
      <p className="about-text">
        Я Murad Gakhramanov, специалист с более чем 11-летним опытом работы в крупной компании, такой как Сбербанк. Где я занимал разного рода должности связанные с ИТ поддержкой, аналической работой
        с большими данными, и построил свою карьеру. С 2021 года я стал обучаться Web разработке. Создал несколько PET проектов. Так же участвовал в тестировании АС Парус.
      </p>
      <h3 className="about-education">Образование:</h3>
      <p className="about-text">
        <ul>
          <li>Компьютерная академия «TOP IT» (ШАГ) - Full-Stack WEB developer</li>
          <li>Тульский государственный университет - Экономика и управление в машиностроении</li>
        </ul>
      </p>
      <h3 className="about-certificate">Электронные сертификаты:</h3>
      <p className="about-text">
        <ul>
          <li>
            <Link to="https://www.coursera.org/learn/html-css-javascript-for-web-developers">HTML, CSS, and Javascript for Web Developers (Coursera)</Link>
          </li>
          <li>
            <Link to="https://www.sololearn.com/certificates/course/en/1097">React+Redux (Sololearn)</Link>
          </li>
          <li>
            Диплом <Link to="https://stepik.org/certificate/678945">Разработка и продвижение Web-проектов (TOP IT ШАГ)</Link>
          </li>
          <li>Основы решения алгоритмических задач (Сбер Университет)</li>
          <li>Управление веб-страницей с помощью JavaScript (Сбер Университет)</li>
          <li>
            <Link to="https://www.sololearn.com/certificates/course/en/1023">HTML (Sololearn)</Link>
          </li>
          <li>
            <Link to="https://www.sololearn.com/certificates/course/en/1024">JavaScript (Sololearn)</Link>
          </li>
          <li>Основы HTML и CSS (Сбер Университет)</li>
          <li>Основы программирования на JavaScript I и II (Сбер Университет)</li>
          <li>Основы программирования (Сбер Университет)</li>
          <li>Автономные системы, Искусственный интеллект и Робототехника (Сбер Университет)</li>
        </ul>
      </p>
    </div>
  )
}

export default About

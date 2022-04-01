import { AiFillHtml5 } from 'react-icons/ai';
import { DiSass, DiGulp } from 'react-icons/di';
import {
  IoLogoJavascript,
  IoMdConstruct,
  IoIosPhonePortrait,
} from 'react-icons/io';
import { SiW3C, SiUdemy } from 'react-icons/si';
import { FaGit, FaReact, FaTelegramPlane } from 'react-icons/fa';
import { RiEnglishInput } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';

import todoPic from '../assets/images/Main/Portfolio/react-todo-list.png';
import countriesPic from '../assets/images/Main/Portfolio/react-rest-countries.png';
import weatherPic from '../assets/images/Main/Portfolio/weather.png';
import socialNetworkPic from '../assets/images/Main/Portfolio/react-social-network.png';
import coursesPic from '../assets/images/Main/Portfolio/computer-courses.png';
import sassLandingPic from '../assets/images/Main/Portfolio/sass-landing.png';
import weFixItAllPic from '../assets/images/Main/Portfolio/we-fix-it-all.png';

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const CHANGE_THEME = 'CHANGE_THEME';
const FILTER_PORTFOLIO_ITEMS = 'FILTER_PORTFOLIO_ITEMS';
const SET_FILTERED_PORTFOLIO_ITEMS = 'SET_FILTERED_PORTFOLIO_ITEMS';

const initialState = {
  theme: 'light',
  language: 'eng',
  currentLanguageInfo: null,
  eng: {
    header: {
      logo: {
        img: 'V',
        name: 'Vanya Karabankov',
      },
      nav: [
        {
          title: 'About me',
          to: '/',
        },
        {
          title: 'Resume',
          to: '/resume',
        },
        {
          title: 'Portfolio',
          to: '/portfolio',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
    },
    main: {
      aboutMe: {
        myself: {
          job: 'Frontend-developer',
          name: 'Ivan Karabankov',
          aboutMeDescr:
            "Junior web-developer from Mogilev, Belarus. I develop both static web-pages and dynamic web-applications. Teachable. I take my job seriously and don't like to stand still, so I always learn something new.",
          buttons: {
            download: 'Download CV',
            contact: 'Contact',
          },
        },
        skills: {
          title: 'What I Do',
          items: [
            {
              id: 1,
              title: 'HTML',
              img: <AiFillHtml5 />,
              text: 'Learned hypertext markup language HTML. I always use semantic HTML.',
            },
            {
              id: 2,
              title: 'CSS',
              img: <DiSass />,
              text: 'Learned style sheet language CSS. Learned how to use preprocessor SASS (SCSS).',
            },
            {
              id: 3,
              title: 'JavaScript',
              img: <IoLogoJavascript />,
              text: 'Learned JavaScript to create interactive elemetns on the page and to send requests and recieve responses from servers.',
            },
            {
              id: 4,
              title: 'ReactJS + Redux',
              img: <FaReact />,
              text: 'Learned ReactJS to make dymanic single page web-applications. Used Redux for state management, as well as all related libraries: react-redux, redux-thunk. I also have experience with react-router-dom.',
            },
            {
              id: 5,
              title: 'Layout',
              img: <SiW3C style={{ marginTop: '-14px' }} />,
              text: 'Learned to make responsive web-pages for different screen resolutions. I always keep up with principles of W3C validation.',
            },
            {
              id: 6,
              title: 'GIT',
              img: <FaGit style={{ marginTop: '-13px' }} />,
              text: 'Learned to use a version control system Git. During developement used GitHub as a remote storage. Learned to push, pull, create branches, reset commits, and more.',
            },
            {
              id: 7,
              title: 'Taskrunners',
              img: <DiGulp />,
              text: 'During the development of web-pages learned to use Gulp taskrunner to optimize the process of development.',
            },
            {
              id: 8,
              title: 'BEM',
              img: <IoMdConstruct />,
              text: 'Learned BEM methodology to name classess of HTML-elements.',
            },
          ],
        },
      },
      resume: {
        title: 'Resume',
        education: {
          title: 'Education',
          items: [
            {
              id: 1,
              year: '2018-2022',
              place: 'Belarusian-Russian University',
              specialization: 'Transport Logistics',
              description: 'This is my main specialty.',
            },
            {
              id: 2,
              year: '2021-2022',
              place: 'Internet',
              specialization: 'Frontend Development',
              description:
                'During this period of time I learned HTML, CSS(SCSS) and JavaScript, as well as Gulp, Git and React JS.',
            },
          ],
        },
        experience: {
          title: 'Experience',
          items: [
            {
              id: 1,
              year: '2022-2024',
              place: 'Work place',
              specialization: 'Logistics expert',
              description:
                'During this period of time I worked as logistics expert.',
            },
            {
              id: 2,
              year: '2022-2024',
              place: 'Work place',
              specialization: 'Logistics expert',
              description:
                'During this period of time I worked as logistics expert.',
            },
          ],
        },
        certificates: {
          title: 'Certificates',
          items: [
            {
              id: 1,
              title: 'FCE (B2 First)',
              descr:
                'International English exam, accepted by thousands of businesses and educational institutions worldwide.',
              date: 'August 2019',
              icon: <RiEnglishInput />,
              to: 'https://drive.google.com/file/d/1NR1GC5mFtC5eVg5WhsylMwSV3eRHi0_Q/view',
            },
            {
              id: 2,
              title:
                'The Complete JavaScript Course 2022: From Zero to Expert!',
              descr: 'Udemy JavaScript course by Jonas Schmedtmann.',
              date: '24 March 2022',
              icon: <SiUdemy />,
              to: 'https://www.udemy.com/certificate/UC-f23b246e-5d8c-4666-9d66-9fa66c0ea31f/',
            },
          ],
        },
        skills: {
          codingSkills: {
            title: 'Coding Skills',
            items: [
              {
                id: 1,
                title: 'HTML/CSS',
                percent: 100,
              },
              {
                id: 2,
                title: 'JavaScript',
                percent: 85,
              },
              {
                id: 3,
                title: 'ReactJS',
                percent: 80,
              },
              {
                id: 4,
                title: 'GIT',
                percent: 70,
              },
            ],
          },
        },
      },
      portfolio: {
        title: 'Portfolio',
        items: [
          {
            id: 1,
            title: 'React Todo List',
            imgSrc: todoPic,
            descr:
              'Simple React Todo List application to train CRUD operations. Used Redux for state management. LocalStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-todo-list/',
            github: 'https://github.com/Lonerr7/React-todo-list',
            githubDescr: 'Watch code',
          },
          {
            id: 2,
            title: 'React Rest Countries',
            imgSrc: countriesPic,
            descr:
              'React application which fetches a list of countries, their information and neighbors and displays it. Redux, redux-thunk, axios, react-router-dom, search by letter filtration, theme switching, localStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Rest-Countries/',
            github: 'https://github.com/Lonerr7/React-Rest-Countries',
            githubDescr: 'Watch code',
          },
          {
            id: 3,
            title: 'React Weather',
            imgSrc: weatherPic,
            descr:
              'React application which gets current weather of the city, 5-day and 7-day weather. Has a feature to choose a country from the list. Used Redux, redux-thunk, axios, theme switching, localStorage API',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Weather/',
            github: 'https://github.com/Lonerr7/React-Weather',
            githubDescr: 'Watch code',
          },
          {
            id: 4,
            title: 'React Social Network',
            imgSrc: socialNetworkPic,
            descr:
              'React social network application, which is a part of It Kamasutra ReactJs Course. I learned the basics of React by developing this app. Redux, redux-thunk, axios, formik, react-router-dom and more.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Social-Network-2/',
            github: 'https://github.com/Lonerr7/React-Social-Network-2',
            githubDescr: 'Watch code',
          },
          {
            id: 5,
            title: 'Computer Courses Landing Page',
            imgSrc: coursesPic,
            descr:
              'Basic HTML/CSS landing page of computer courses. Used Gulp, SCSS, JavaScript and JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/Computer-Courses-Complete/',
            github: 'https://github.com/Lonerr7/Computer-Courses-dev-',
            githubDescr: 'Watch code',
          },
          {
            id: 6,
            title: 'We Fix It All Landing Page',
            imgSrc: weFixItAllPic,
            descr:
              'Basic HTML/CSS landing page of devices repair organization. Used Gulp, SCSS, JavaScript and JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/We-Fix-It-All-Complete/',
            github: 'https://github.com/Lonerr7/We-Fix-It-All-dev',
            githubDescr: 'Watch code',
          },
          {
            id: 7,
            title: 'Sass Landing Page',
            imgSrc: sassLandingPic,
            descr:
              'Basic HTML/CSS landing page to train HTML/CSS skills. Used Gulp, SCSS and JavaScript.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/SaaS-Landing-Complete/',
            github: 'https://github.com/Lonerr7/SaaS-Landing',
            githubDescr: 'Watch code',
          },
        ],
        currentItems: [
          {
            id: 1,
            title: 'React Todo List',
            imgSrc: todoPic,
            descr:
              'Simple React Todo List application to train CRUD operations. Used Redux for state management. LocalStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-todo-list/',
            github: 'https://github.com/Lonerr7/React-todo-list',
            githubDescr: 'Watch code',
          },
          {
            id: 2,
            title: 'React Rest Countries',
            imgSrc: countriesPic,
            descr:
              'React application which fetches a list of countries, their information and neighbors and displays it. Redux, redux-thunk, axios, react-router-dom, search by letter filtration, theme switching, localStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Rest-Countries/',
            github: 'https://github.com/Lonerr7/React-Rest-Countries',
            githubDescr: 'Watch code',
          },
          {
            id: 3,
            title: 'React Weather',
            imgSrc: weatherPic,
            descr:
              'React application which gets current weather of the city, 5-day and 7-day weather. Has a feature to choose a country from the list. Used Redux, redux-thunk, axios, theme switching, localStorage API',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Weather/',
            github: 'https://github.com/Lonerr7/React-Weather',
            githubDescr: 'Watch code',
          },
          {
            id: 4,
            title: 'React Social Network',
            imgSrc: socialNetworkPic,
            descr:
              'React social network application, which is a part of It Kamasutra ReactJs Course. I learned the basics of React by developing this app. Redux, redux-thunk, axios, formik, react-router-dom and more.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Social-Network-2/',
            github: 'https://github.com/Lonerr7/React-Social-Network-2',
            githubDescr: 'Watch code',
          },
          {
            id: 5,
            title: 'Computer Courses Landing Page',
            imgSrc: coursesPic,
            descr:
              'Basic HTML/CSS landing page of computer courses. Used Gulp, SCSS, JavaScript and JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/Computer-Courses-Complete/',
            github: 'https://github.com/Lonerr7/Computer-Courses-dev-',
            githubDescr: 'Watch code',
          },
          {
            id: 6,
            title: 'We Fix It All Landing Page',
            imgSrc: weFixItAllPic,
            descr:
              'Basic HTML/CSS landing page of devices repair organization. Used Gulp, SCSS, JavaScript and JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/We-Fix-It-All-Complete/',
            github: 'https://github.com/Lonerr7/We-Fix-It-All-dev',
            githubDescr: 'Watch code',
          },
          {
            id: 7,
            title: 'Sass Landing Page',
            imgSrc: sassLandingPic,
            descr:
              'Basic HTML/CSS landing page to train HTML/CSS skills. Used Gulp, SCSS and JavaScript.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/SaaS-Landing-Complete/',
            github: 'https://github.com/Lonerr7/SaaS-Landing',
            githubDescr: 'Watch code',
          },
        ],
      },
      contact: {
        title: 'Contact',
        contactInfo: [
          {
            id: 1,
            img: <IoIosPhonePortrait />,
            title: '+375-29-154-71-02',
            descr: 'My personal phone number',
          },
          {
            id: 2,
            img: <FaTelegramPlane />,
            title: 'https://t.me/nice3guy',
            descr: 'My personal telegram profile',
          },
          {
            id: 3,
            img: <BsEnvelope />,
            title: 'ivan.karabankov@gmail.com',
            descr: 'My personal e-mail address',
          },
        ],
        contactForm: {
          title: 'How Can I Help You?',
          namePh: 'Your Name',
          nameError: 'Name is required.',
          emailPh: 'Email Address',
          emailError: 'Valid email is required.',
          emailValidation: 'Invalid email format',
          subjectPh: 'Subject',
          subjectError: 'Subject is required.',
          messagePh: 'Message',
          messageError: 'Please, leave me a message.',
          buttonText: 'Send message',
        },
      },
    },
    footer: {
      designLinkText: 'Design was taken from here',
    },
  },
  ru: {
    header: {
      logo: {
        img: 'В',
        name: 'Ваня Карабаньков',
      },
      nav: [
        {
          title: 'Обо мне',
          to: '/',
        },
        {
          title: 'Резюме',
          to: '/resume',
        },
        {
          title: 'Портфолио',
          to: '/portfolio',
        },
        {
          title: 'Контакты',
          to: '/contact',
        },
      ],
    },
    main: {
      aboutMe: {
        myself: {
          job: 'Фронтенд разработчик',
          name: 'Иван Карабаньков',
          aboutMeDescr:
            'Начинающий веб разработчик из Могилева, Беларусь. Занимаюсь разработкой как статичных веб-сайтов, так и динамичных веб-приложений. Ответственно подхожу к работе. Обучаем. Не люблю стоять на месте и всегда изучаю что-то новое.',
          buttons: {
            download: 'Скачать резюме',
            contact: 'Мои контакты',
          },
        },
        skills: {
          title: 'Что я умею',
          items: [
            {
              id: 1,
              title: 'HTML',
              img: <AiFillHtml5 />,
              text: 'Изучил язык гипертекстовой разметки HTML. Применяю принципы семантики.',
            },
            {
              id: 2,
              title: 'CSS',
              img: <DiSass />,
              text: 'Изучил язык стилей CSS. Научился использовать препроцессор SASS (SCSS).',
            },
            {
              id: 3,
              title: 'JavaScript',
              img: <IoLogoJavascript />,
              text: 'Изучил язык JavaScript для создания интерактивности на сайте, а также для отправки запросов на сервер.',
            },
            {
              id: 4,
              title: 'ReactJS + Redux',
              img: <FaReact />,
              text: 'Изучил JavaScript библиотеку ReactJs для создания динамических веб-приложений. Для управления состоянием использовал Redux, а также все сопутствующие ему библиотеки: react-redux, redux-thunk. Есть опыт работы с react-router-dom',
            },
            {
              id: 5,
              title: 'Верстка',
              img: <SiW3C />,
              text: 'Научился делать адаптивные макеты под любые разрешения экрана. Подстраиваюсь под принципы W3C-валидатора.',
            },
            {
              id: 6,
              title: 'GIT',
              img: <FaGit />,
              text: 'Изучил систему контроля версий Git. В работе использовал GitHub в качестве удаленного хранилища. Научился пуллить, пушить, создавать ветки, откатываться к предыдущим коммитам и тд.',
            },
            {
              id: 7,
              title: 'Сборщики',
              img: <DiGulp />,
              text: 'При разработке статичных веб-страниц научился применять сборщик Gulp для оптимизации процесса разработки',
            },
            {
              id: 8,
              title: 'БЭМ',
              img: <IoMdConstruct />,
              text: 'Научился использовать методолгию БЭМ для наименования классов элементов.',
            },
          ],
        },
      },
      resume: {
        title: 'Резюме',
        education: {
          title: 'Образование',
          items: [
            {
              id: 1,
              year: '2018-2022',
              place: 'Белорусско-Российский Университет',
              specialization: 'Транспортная логистика',
              description: 'Моя основная специальность.',
            },
            {
              id: 2,
              year: '2021-2022',
              place: 'Интернет',
              specialization: 'Фронтенд разработчик',
              description:
                'В этот период времени я изучил HTML, CSS и JavaScript, а также Gulp, Git и React JS.',
            },
          ],
        },
        experience: {
          title: 'Опыт',
          items: [
            {
              id: 1,
              year: '2022-2024',
              place: 'Будущее место работы',
              specialization: 'Специалист по логистике',
              description:
                'В этот период времени я работал по своей специальности.',
            },
          ],
        },
        certificates: {
          title: 'Сертификаты',
          items: [
            {
              id: 1,
              title: 'FCE (B2 First)',
              descr:
                'Международный экзамен Английского языка, результат которого принимается многими работодателями и учебными заведениями по всему миру.',
              date: 'Август 2019',
              icon: <RiEnglishInput />,
              to: 'https://drive.google.com/file/d/1NR1GC5mFtC5eVg5WhsylMwSV3eRHi0_Q/view',
            },
            {
              id: 2,
              title:
                'The Complete JavaScript Course 2022: From Zero to Expert!',
              descr:
                'Курс по JavaScript на платформе Udemy от преподавателя Jonas Schmedtmann.',
              date: '24 Марта 2022',
              icon: <SiUdemy />,
              to: 'https://www.udemy.com/certificate/UC-f23b246e-5d8c-4666-9d66-9fa66c0ea31f/',
            },
          ],
        },
        skills: {
          codingSkills: {
            title: 'Навыки написания кода',
            items: [
              {
                id: 1,
                title: 'HTML/CSS',
                percent: 100,
              },
              {
                id: 2,
                title: 'JavaScript',
                percent: 85,
              },
              {
                id: 3,
                title: 'ReactJS',
                percent: 80,
              },
              {
                id: 4,
                title: 'GIT',
                percent: 70,
              },
            ],
          },
        },
      },
      portfolio: {
        title: 'Portfolio',
        items: [
          {
            id: 1,
            title: 'React Todo List',
            imgSrc: todoPic,
            descr:
              'Простое React приложение по выводу списка дел для тренирвки CRUD навыков. Использовал Redux для контроля состояния и локальное хранилище браузера.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-todo-list/',
            github: 'https://github.com/Lonerr7/React-todo-list',
            githubDescr: 'Смотреть код',
          },
          {
            id: 2,
            title: 'React Rest Countries',
            imgSrc: countriesPic,
            descr:
              'React приложение, которое получает список стран с подробной информацией с API и отображает их. Применил фильтрацию стран по поиску и изменение темы. Использовал Redux, redux-thunk, axios, react-router-dom, localStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Rest-Countries/',
            github: 'https://github.com/Lonerr7/React-Rest-Countries',
            githubDescr: 'Смотреть код',
          },
          {
            id: 3,
            title: 'React Weather',
            imgSrc: weatherPic,
            descr:
              'React приложение, которое получает с API текущую погоду в городе, а также погоду на 5 и 7 дней. Имеет возможность переключения страны на страну из списка и смену темы. Использовал Redux, redux-thunk, axios, localStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Weather/',
            github: 'https://github.com/Lonerr7/React-Weather',
            githubDescr: 'Смотреть код',
          },
          {
            id: 4,
            title: 'React Social Network',
            imgSrc: socialNetworkPic,
            descr:
              'Приложение социальной сети на React, которое является частью курса по React от It Kamasutra. Я изучил основы ReactJs разрабатывая это приложение. Использовал Redux, redux-thunk, axios, formik, react-router-dom.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Social-Network-2/',
            github: 'https://github.com/Lonerr7/React-Social-Network-2',
            githubDescr: 'Смотреть код',
          },
          {
            id: 5,
            title: 'Computer Courses Landing Page',
            imgSrc: coursesPic,
            descr:
              'Простая HTML/CSS страница компьютерных курсов. Использовал Gulp, SCSS, JavaScript и JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/Computer-Courses-Complete/',
            github: 'https://github.com/Lonerr7/Computer-Courses-dev-',
            githubDescr: 'Смотреть код',
          },
          {
            id: 6,
            title: 'We Fix It All Landing Page',
            imgSrc: weFixItAllPic,
            descr:
              'Простая HTML/CSS страница организации по ремонту девайсов. Использовал Gulp, SCSS, JavaScript и JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/We-Fix-It-All-Complete/',
            github: 'https://github.com/Lonerr7/We-Fix-It-All-dev',
            githubDescr: 'Смотреть код',
          },
          {
            id: 7,
            title: 'Sass Landing Page',
            imgSrc: sassLandingPic,
            descr:
              'Просая  Basic HTML/CSS страница для тренировки навыков по HTML/CSS. Использовал Gulp, SCSS и JavaScript.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/SaaS-Landing-Complete/',
            github: 'https://github.com/Lonerr7/SaaS-Landing',
            githubDescr: 'Смотреть код',
          },
        ],
        currentItems: [
          {
            id: 1,
            title: 'React Todo List',
            imgSrc: todoPic,
            descr:
              'Простое React приложение по выводу списка дел для тренирвки CRUD навыков. Использовал Redux для контроля состояния и локальное хранилище браузера.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-todo-list/',
            github: 'https://github.com/Lonerr7/React-todo-list',
            githubDescr: 'Смотреть код',
          },
          {
            id: 2,
            title: 'React Rest Countries',
            imgSrc: countriesPic,
            descr:
              'React приложение, которое получает список стран с подробной информацией с API и отображает их. Применил фильтрацию стран по поиску и изменение темы. Использовал Redux, redux-thunk, axios, react-router-dom, localStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Rest-Countries/',
            github: 'https://github.com/Lonerr7/React-Rest-Countries',
            githubDescr: 'Смотреть код',
          },
          {
            id: 3,
            title: 'React Weather',
            imgSrc: weatherPic,
            descr:
              'React приложение, которое получает с API текущую погоду в городе, а также погоду на 5 и 7 дней. Имеет возможность переключения страны на страну из списка и смену темы. Использовал Redux, redux-thunk, axios, localStorage API.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Weather/',
            github: 'https://github.com/Lonerr7/React-Weather',
            githubDescr: 'Смотреть код',
          },
          {
            id: 4,
            title: 'React Social Network',
            imgSrc: socialNetworkPic,
            descr:
              'Приложение социальной сети на React, которое является частью курса по React от It Kamasutra. Я изучил основы ReactJs разрабатывая это приложение. Использовал Redux, redux-thunk, axios, formik, react-router-dom.',
            technologies: 'ReactJs',
            filterProp: 'react',
            to: 'https://lonerr7.github.io/React-Social-Network-2/',
            github: 'https://github.com/Lonerr7/React-Social-Network-2',
            githubDescr: 'Смотреть код',
          },
          {
            id: 5,
            title: 'Computer Courses Landing Page',
            imgSrc: coursesPic,
            descr:
              'Простая HTML/CSS страница компьютерных курсов. Использовал Gulp, SCSS, JavaScript и JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/Computer-Courses-Complete/',
            github: 'https://github.com/Lonerr7/Computer-Courses-dev-',
            githubDescr: 'Смотреть код',
          },
          {
            id: 6,
            title: 'We Fix It All Landing Page',
            imgSrc: weFixItAllPic,
            descr:
              'Простая HTML/CSS страница организации по ремонту девайсов. Использовал Gulp, SCSS, JavaScript и JQuery.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/We-Fix-It-All-Complete/',
            github: 'https://github.com/Lonerr7/We-Fix-It-All-dev',
            githubDescr: 'Смотреть код',
          },
          {
            id: 7,
            title: 'Sass Landing Page',
            imgSrc: sassLandingPic,
            descr:
              'Просая  Basic HTML/CSS страница для тренировки навыков по HTML/CSS. Использовал Gulp, SCSS и JavaScript.',
            technologies: 'HTML/CSS(SCSS)/JS(JQuery)/Gulp',
            filterProp: 'landing',
            to: 'https://lonerr7.github.io/SaaS-Landing-Complete/',
            github: 'https://github.com/Lonerr7/SaaS-Landing',
            githubDescr: 'Смотреть код',
          },
        ],
      },
      contact: {
        title: 'Контакты',
        contactInfo: [
          {
            id: 1,
            img: <IoIosPhonePortrait />,
            title: '+375-29-154-71-02',
            descr: 'Мой персональный номер телефона',
          },
          {
            id: 2,
            img: <FaTelegramPlane />,
            title: 'https://t.me/nice3guy',
            descr: 'Мой персональный телеграм аккаунт',
          },
          {
            id: 3,
            img: <BsEnvelope />,
            title: 'ivan.karabankov@gmail.com',
            descr: 'Моя персональная рабочая почта',
          },
        ],
        contactForm: {
          title: 'Как я могу Вам помочь?',
          namePh: 'Ваше Имя',
          nameError: 'Введите Ваше имя.',
          emailPh: 'Ваша почта',
          emailError: 'Введите Вашу почту.',
          emailValidation: 'Неправильный формат электронной почты',
          subjectPh: 'Предмет',
          subjectError: 'Введите предмет обращения.',
          messagePh: 'Сообщение',
          messageError: 'Пожалуйста, напишите мне сообщениие.',
          buttonText: 'Отправить письмо',
        },
      },
    },
    footer: {
      designLinkText: 'Дизайн был взят отсюда',
    },
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      document.body.setAttribute('data-language', action.newLanguage);
      return {
        ...state,
        language: action.newLanguage,
        currentLanguageInfo: action.newLanguage === 'ru' ? state.ru : state.eng,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.newTheme,
      };
    case FILTER_PORTFOLIO_ITEMS:
      return {
        ...state,
        ru: {
          ...state.ru,
          main: {
            ...state.ru.main,
            portfolio: {
              ...state.ru.main.portfolio,
              currentItems:
                action.filterWord === ''
                  ? state.ru.main.portfolio.items
                  : state.ru.main.portfolio.items.filter(
                      (i) => i.filterProp === action.filterWord
                    ),
            },
          },
        },
        eng: {
          ...state.eng,
          main: {
            ...state.eng.main,
            portfolio: {
              ...state.eng.main.portfolio,
              currentItems:
                action.filterWord === ''
                  ? state.eng.main.portfolio.items
                  : state.eng.main.portfolio.items.filter(
                      (i) => i.filterProp === action.filterWord
                    ),
            },
          },
        },
      };
    case SET_FILTERED_PORTFOLIO_ITEMS:
      return {
        ...state,
        currentLanguageInfo:
          state.language === 'eng' ? { ...state.eng } : { ...state.ru },
      };
    default:
      return state;
  }
};

export const changeLanguageSuccess = (newLanguage) => ({
  type: CHANGE_LANGUAGE,
  newLanguage,
});

export const changeThemeSuccess = (newTheme) => ({
  type: CHANGE_THEME,
  newTheme,
});

export const filterPortfolioItemsSuccess = (filterWord) => ({
  type: FILTER_PORTFOLIO_ITEMS,
  filterWord,
});

export const setFilteredPortfolioItemsSuccess = () => ({
  type: SET_FILTERED_PORTFOLIO_ITEMS,
});

// export const

export default appReducer;

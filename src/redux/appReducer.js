import { AiFillHtml5 } from 'react-icons/ai';
import { DiSass, DiGulp } from 'react-icons/di';
import { IoLogoJavascript, IoMdConstruct } from 'react-icons/io';
import { SiW3C, SiUdemy } from 'react-icons/si';
import { FaGit, FaReact } from 'react-icons/fa';
import { RiEnglishInput } from 'react-icons/ri';

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const CHANGE_THEME = 'CHANGE_THEME';

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
            "Junior web-developer. I develop both static web-pages and dynamic web-applications. Teachable. I take my job seriously and don't like to stand still, so I always learn something new.",
          buttons: {
            download: 'Download CV',
            contact: 'Contact',
          },
        },
        skills: [
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
      resume: {
        title: 'Resume',
        education: [
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
        experience: [
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
            'Начинающий веб разработчик. Занимаюсь разработкой как статичных веб-сайтов, так и динамичных веб-приложений. Ответственно подхожу к работе. Обучаем. Не люблю стоять на месте и всегда изучаю что-то новое.',
          buttons: {
            download: 'Скачать резюме',
            contact: 'Мои контакты',
          },
        },
        skills: [
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
      resume: {
        title: 'Резюме',
        education: [
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
        experience: [
          {
            id: 1,
            year: '2022-2024',
            place: 'Будущее место работы',
            specialization: 'Специалист по логистике',
            description:
              'В этот период времени я работал по своей специальности.',
          },
        ],
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

export default appReducer;

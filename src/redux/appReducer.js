import { BsMoonFill } from 'react-icons/bs';

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// TODO: Разобраться с пробелами между буквами на русском языке

const initialState = {
  theme: 'light',
  language: 'eng',
  currentLanguageInfo: {
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
            'Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.',
          buttons: {
            download: 'Download CV',
            contact: 'Contact',
          },
        },
      },
    },
  },
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
            'Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.',
          buttons: {
            download: 'Download CV',
            contact: 'Contact',
          },
        },
      },
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
            'Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.',
          buttons: {
            download: 'Скачать резюме',
            contact: 'Мои контакты',
          },
        },
      },
    },
  },
  skills: [
    {
      id: 1,
      title: 'Hii',
      img: <BsMoonFill />,
      text: 'adawdasdad',
    },
  ],
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
    default:
      return state;
  }
};

export const changeLanguageSuccess = (newLanguage) => ({
  type: CHANGE_LANGUAGE,
  newLanguage,
});

export default appReducer;

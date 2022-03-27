export const splitString = (str, separator, index) => {
  return str.split(separator)[index];
};

export const filterPortfolioItems = (state, lang, filterWord) => {
  return {
    [lang]: {
      ...state[lang],
      main: {
        ...state[lang].main,
        portfolio: {
          ...state[lang].main.portfolio,
          currentItems:
            filterWord === ''
              ? state[lang].main.portfolio.items // !
              : state[lang].main.portfolio.items.filter(
                  (i) => i.filterProp === filterWord
                ),
        },
      },
    },
  };
};

// return {
//   ...state,
//   ru: {
//     ...state.ru,
//     main: {
//       ...state.ru.main,
//       portfolio: {
//         ...state.ru.main.portfolio,
//         currentItems:
//           action.filterWord === ''
//             ? state.ru.main.portfolio.items
//             : state.ru.main.portfolio.items.filter(
//                 (i) => i.filterProp === action.filterWord
//               ),
//       },
//     },
//   },
//   eng: {
//     ...state.eng,
//     main: {
//       ...state.eng.main,
//       portfolio: {
//         ...state.eng.main.portfolio,
//         currentItems:
//           action.filterWord === ''
//             ? state.eng.main.portfolio.items
//             : state.eng.main.portfolio.items.filter(
//                 (i) => i.filterProp === action.filterWord
//               ),
//       },
//     },
//   },
// };

import { colors } from '@material-ui/core';

const MAIN_COLOR = colors.lightBlue;

const theme = {
  width: {
    page: '1024px',
    authForm: '300px',
  },
  color: {
    main: {
      logo: MAIN_COLOR[800],
      background: colors.grey[100],
      footer: colors.grey[300],
    },
    materialInput: {
      border: '',
      hoverBorder: 'black',
      focusedBorder: MAIN_COLOR[500],
      label: MAIN_COLOR[500],
    },
    materialButton: {
      background: MAIN_COLOR[300],
      hoverBackground: MAIN_COLOR[500],
    },
    portfolio: {
      count: MAIN_COLOR[800],
      code: colors.grey[600],
      currency: colors.grey[600],
    },
  },
};

export default theme;

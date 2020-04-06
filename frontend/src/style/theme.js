import { colors } from '@material-ui/core';

const MAIN_COLOR = colors.purple;

const theme = {
  width: {
    page: '1024px',
    authForm: '400px',
  },
  color: {
    main: {
      background: colors.grey[100],
    },
    materialInput: {
      border: '',
      hoverBorder: 'black',
      focusedBorder: MAIN_COLOR[500],
      label: MAIN_COLOR[500],
    },
  },
};

export default theme;

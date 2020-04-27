import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MainChart from '../MainChart';
import TradingCharts from '../TradingCharts';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <PanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </PanelWrapper>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="주요 지표" {...a11yProps(0)} />
          <Tab label="KOSPI TOP30" {...a11yProps(1)} />
          <Tab label="KOSDAQ TOP30" {...a11yProps(2)} />
          <Tab label="NASDAQ TOP30" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TradingCharts />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MainChart name="KOSPI" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MainChart name="KOSDAQ" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <MainChart name="Nasdaq" />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

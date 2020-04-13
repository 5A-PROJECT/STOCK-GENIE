import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/home/Main';
import AuthPage from './pages/auth';
import CustomAppBar from './organisms/CustomAppBar';
import CustomFooter from './organisms/CustomFooter';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { observer, inject } from 'mobx-react';
import BackDrop from './molecules/Backdrop';
import PredictPage from './pages/predict';
import SearchPage from './pages/search';
import PortFolioPage from './pages/portfolio';
import NotFound from './pages/notfound';
import PortfolioItem from './pages/portfolioItem';

const AppWrppar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

const Content = styled.section`
  flex-grow: 1;
`;

function App({ authStore }) {
  const { loading } = authStore;
  return (
    <ThemeProvider theme={theme}>
      <AppWrppar>
        <CustomAppBar />
        <Content>
          <Switch>
            {/* 라우트 */}
            <Route path="/" component={Main} exact />
            <Route
              path="/login"
              render={(props) => <AuthPage type="login" {...props} />}
            />
            <Route
              path="/register"
              render={(props) => <AuthPage type="register" {...props} />}
            />
            <Route path="/predict" component={PredictPage} exact />
            <Route path="/portfolio" component={PortFolioPage} exact />
            <Route path="/portfolio/:id" component={PortfolioItem} />
            <Route path="/search" component={SearchPage} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
        <CustomFooter />
        <BackDrop loading={loading} />
      </AppWrppar>
    </ThemeProvider>
  );
}

export default inject('authStore')(observer(App));

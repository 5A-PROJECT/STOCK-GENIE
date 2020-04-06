import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/home/Main';
import AuthPage from './pages/auth';
import CustomAppBar from './organisms/CustomAppBar';
import CustomFooter from './organisms/CustomFooter';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const AppWrppaer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

const Content = styled.section`
  flex-grow: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrppaer>
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
          </Switch>
        </Content>
        <CustomFooter />
      </AppWrppaer>
    </ThemeProvider>
  );
}

export default App;

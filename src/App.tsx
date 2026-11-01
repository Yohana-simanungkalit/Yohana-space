import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AppRouter } from './router/AppRouter';
import { ConfigProvider, theme } from 'antd';
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';



function App() {
  const { theme: currentTheme } = useContext(ThemeContext);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "light"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={AppRouter} />
    </ConfigProvider>
  )
}

export default App

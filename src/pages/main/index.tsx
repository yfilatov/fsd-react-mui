import { Navigate, Route, Routes } from 'react-router-dom';
import { Analytics } from 'widgets/analytics';
import { Sidebar }  from 'widgets/app-sidebar';
import styles from './index.module.scss';
import { Box } from '@mui/material';

export function Main() {
  return (
    <Box className={styles.app}>
      <Box>
        <Sidebar/>
      </Box>
      <Box>
        <Routes>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="*" element={<Navigate to="/app/analytics" replace={true}/>}/>
        </Routes>
      </Box>
    </Box>
  );
}


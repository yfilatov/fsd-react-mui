import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { authContext } from 'entities/auth';
import sidebarData from '../model/sidebarData';

const Sidebar = () => {
  const { currentUser } = useContext(authContext);
  return (
    <Box className={styles.container}>
      <div className={styles.title}>Приложуха</div>
      <ul className={styles.menu}>
        {sidebarData.map(item => {
          return <NavLink key={item.path} className={styles.sideitem} to={item.path}>
            {item.icon}
            <span className={styles.linktext}>{item.title}</span>
          </NavLink>
        })}
      </ul>
      <div className={styles.user}>{currentUser?.name}</div>
    </Box>
  )
}
export default Sidebar

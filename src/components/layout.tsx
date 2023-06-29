import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Menu } from 'antd'
import styles from './layout.module.css'

const menuItems = [
  {
    key: 'center',
    icon: <Link to='/'>Sumtendo Admin</Link>,
  },
  {
    key: 'settings',
    icon: <Link to='/users'>User Management</Link>,
  },
  {
    key: 'logout',
    icon: <Link to='/products'>Product Management</Link>,
  },
]

export default function Layout() {
  return (
    <div>
      <Menu mode='horizontal' items={menuItems} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

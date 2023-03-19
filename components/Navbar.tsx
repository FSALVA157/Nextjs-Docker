import { ActiveLink } from "./ActiveLink"
import styles from './navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contacts'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
        {
          menuItems.map((item, index) => {
            //const url = new URL(item.href)
            return (              
            <ActiveLink key={index} text={item.text} href={item.href} />
            )              
})
        }
        
    </nav>
  )
}

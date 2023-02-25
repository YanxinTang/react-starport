import clsx from 'clsx';
import styles from './Setting.module.css';

interface MenuProps {
  children: React.ReactNode;
}

const Menu = (props: MenuProps) => {
  return <div className={clsx(styles.menu, 'dark:bg-neutral-900')}>{props.children}</div>;
};

export default Menu;
export type { MenuProps };

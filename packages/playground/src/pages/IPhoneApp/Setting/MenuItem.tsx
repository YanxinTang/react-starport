import clsx from 'clsx';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Icon, { IconProps } from '../../../components/Icon';
import styles from './Setting.module.css';

interface MenuItemProps {
  className?: string;
  icon?: IconProps['name'];
  iconBackgroundColor?: string;
  label?: string;
  prefix?: React.ReactNode;
  children?: React.ReactNode;
  to?: LinkProps['to'];
}

const MenuItem = (props: MenuItemProps) => {
  const {
    icon,
    iconBackgroundColor,
    prefix = (
      <div className={clsx('text-white rounded p-1 mr-3', iconBackgroundColor)}>
        <Icon name={icon!} />
      </div>
    ),

    label,
    children = (
      <span className="text-neutral-700 dark:text-white">{label}</span>
    ),
  } = props;

  const content = (
    <div className={clsx(styles.menuItem, props.className)}>
      <div className="py-2">{prefix}</div>
      <div className={clsx(styles.menuItemContent, 'dark:border-neutral-800')}>
        <span className="flex-1">{children}</span>
        <span className="text-gray-300 dark:text-neutral-800">
          <Icon name="chevronRight" />
        </span>
      </div>
    </div>
  );
  if (props.to) {
    return (
      <Link to={props.to} className={styles.menuChild}>
        {content}
      </Link>
    );
  }
  return React.cloneElement(content, {
    className: clsx(styles.menuItem, styles.menuChild, props.className),
  });
};

export default MenuItem;
export type { MenuItemProps };

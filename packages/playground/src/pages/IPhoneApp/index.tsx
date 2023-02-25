import { StarportCarrier } from '@react-starport/core';
import { Outlet } from 'react-router-dom';
import Icon from '../../components/Icon';
import styles from './IPhoneApp.module.css';

interface IPhoneAppProps {}

const IPhoneApp = (props: IPhoneAppProps) => {
  return (
    <div className={styles.IPhoneApp}>
      <div className="flex justify-between dark:text-white">
        <span className="flex-1 text-sm text-center">12:35</span>
        <div className="notck flex-0 w-36"></div>
        <div className="flex-1 flex flex-row items-center justify-around">
          <Icon name="reception4"></Icon>
          <span className="text-sm">4G</span>
          <Icon name="batteryHalf"></Icon>
        </div>
      </div>
      <div className="pt-4">
        <StarportCarrier duration={300}>
          <Outlet></Outlet>
        </StarportCarrier>
      </div>
    </div>
  );
};

export default IPhoneApp;
export type { IPhoneAppProps };

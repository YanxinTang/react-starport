import { Starport } from '@react-starport/core';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import MenuSkeleton from './MenuSkeleton';

interface SettingDetailProps {}

const SettingDetail = (props: SettingDetailProps) => {
  return (
    <div>
      <div className="h-12">
        <Link to="/iphone/setting/">
          <div className="text-blue-500 inline-flex flex-row items-center gap-1">
            <Icon name="chevronLeft" />
            <Starport port="title" style={{ height: '24px' }}>
              <h1 className="text-blue-500 transition-all duration-300 whitespace-nowrap">
                设置
              </h1>
            </Starport>
          </div>
        </Link>
      </div>
      <div className="space-y-8">
        <MenuSkeleton count={3}></MenuSkeleton>

        <MenuSkeleton count={4}></MenuSkeleton>

        <MenuSkeleton count={6}></MenuSkeleton>
      </div>
    </div>
  );
};

export default SettingDetail;
export type { SettingDetailProps };

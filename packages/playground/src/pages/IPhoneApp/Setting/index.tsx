import Menu from './Menu';
import MenuItem from './MenuItem';
import LogoSvg from '../../../logo_square.svg';
import { Starport } from '@react-starport/core';

interface SettingProps {}

const Setting = (props: SettingProps) => {
  return (
    <div>
      <div className="h-8"></div>
      <Starport port="title" style={{ height: '38px' }}>
        <h1 className="text-2xl font-bold dark:text-white whitespace-nowrap transition-all duration-300">
          设置
        </h1>
      </Starport>
      <div className="space-y-8">
        <Menu>
          <MenuItem
            className="gap-4"
            icon="airplaneFill"
            iconBackgroundColor="bg-amber-500"
            to="detail"
            prefix={
              <div className="rounded-full w-16 h-16 bg-gray-100">
                <img src={LogoSvg} alt="avatar" />
              </div>
            }
          >
            <div className="text-neutral-700 dark:text-white">
              <div className="text-xl">react-starport</div>
              <div className="text-xs text-neutral-600 dark:text-white">
                Apple ID、iClould+、媒体与购买项目
              </div>
            </div>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem
            label="飞行模式"
            icon="airplaneFill"
            iconBackgroundColor="bg-amber-500"
            to="detail"
          />
          <MenuItem
            label="无线局域网"
            icon="wifi"
            iconBackgroundColor="bg-blue-500"
            to="detail"
          />
          <MenuItem
            label="蓝牙"
            icon="bluetooth"
            iconBackgroundColor="bg-blue-500"
            to="detail"
          />
          <MenuItem
            label="蜂窝网络"
            icon="broadcastPin"
            iconBackgroundColor="bg-green-500"
            to="detail"
          />
          <MenuItem
            label="个人热点"
            icon="airplaneFill"
            iconBackgroundColor="bg-green-500"
            to="detail"
          />
        </Menu>

        <Menu>
          <MenuItem
            label="通知"
            icon="bellFill"
            iconBackgroundColor="bg-red-500"
            to="detail"
          />
          <MenuItem
            label="声音与触感"
            icon="volumeUpFill"
            iconBackgroundColor="bg-red-500"
            to="detail"
          />
          <MenuItem
            label="专注模式"
            icon="moon"
            iconBackgroundColor="bg-indigo-500"
            to="detail"
          />
          <MenuItem
            label="屏幕使用时间"
            icon="hourglassSplit"
            iconBackgroundColor="bg-indigo-500"
            to="detail"
          />
        </Menu>
      </div>
    </div>
  );
};

export default Setting;
export type { SettingProps };

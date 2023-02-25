import Menu from '../Setting/Menu';
import MenuItem from '../Setting/MenuItem';

interface MenuSkeletonProps {
  count: number;
}

const MenuSkeleton = (props: MenuSkeletonProps) => {
  return (
    <Menu>
      {Array.from(new Array(props.count), (_, i) => i).map(i => {
        return (
          <MenuItem
            key={i}
            className="gap-4"
            prefix={
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-4"></div>
            }
          >
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default MenuSkeleton;
export type { MenuSkeletonProps };

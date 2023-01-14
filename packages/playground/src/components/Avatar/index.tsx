import { useState } from 'react';
import { classNames } from '../../utils';
import './Avatar.css';

interface AvatarProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div
      className={classNames(
        `avatar transition-all duration-700`,
        props.className
      )}
      style={props.style}
    >
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      {props.children}
    </div>
  );
};

export default Avatar;

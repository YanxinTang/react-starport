import { images } from '../../data';
import { classNames } from '../../utils';

interface MyComponentProps {
  index: number;
  className?: string;
}

export default function MyComponent(props: MyComponentProps) {
  const className = classNames(
    props.className,
    'my-component overflow-hidden w-full h-full transition-all duration-700 relative select-none'
  );
  return (
    <div className={className}>
      <img
        className="object-cover block w-full h-full bg-gray-400"
        src={images[props.index]}
        alt="My Component"
      />
      <div className="absolute pt-5 left-0 right-0 bottom-0 bg-gradient-to-t from-black:40 to-transparent text-white font-mono flex items-center justify-center">
        {props.index}
      </div>
    </div>
  );
}

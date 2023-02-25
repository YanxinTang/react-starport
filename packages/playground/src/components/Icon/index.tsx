import * as icons from './icons';

interface IconProps {
  className?: string;
  name: keyof typeof icons;
}

export default function Icon(props: IconProps) {
  const { name, ...restProps } = props;
  const BootstrapIcon = icons[props.name];
  return <BootstrapIcon width="1em" height="1em" {...restProps} />;
}

export type { IconProps };

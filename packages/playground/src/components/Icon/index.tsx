import * as icons from './icons';

interface IconProps {
  name: keyof typeof icons;
}

export default function Icon(props: IconProps) {
  const BootstrapIcon = icons[props.name];
  return <BootstrapIcon width="1em" height="1em" />;
}

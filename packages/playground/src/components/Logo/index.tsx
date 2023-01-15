import { ReactComponent as LogoSvg } from './../../logo.svg';
interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  return <LogoSvg {...props} />;
}

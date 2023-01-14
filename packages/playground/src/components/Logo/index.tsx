interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  return <img src="/logo512.png" alt="react-starport" {...props} />;
}

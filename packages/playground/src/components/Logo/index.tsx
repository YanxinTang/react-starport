interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <img
      src={process.env.PUBLIC_URL + '/logo512.png'}
      alt="react-starport"
      {...props}
    />
  );
}

import { Link } from 'react-router-dom';
import './Navigation.css';
import { ReactComponent as Logo } from './../../logo_square.svg';
import Icon from '../Icon';
import { useGlobalConfig } from '../GlobalConfig';
import { classNames } from '../../utils';

const Navigation = () => {
  const { dark, setDark, debug, setDebug } = useGlobalConfig();

  const darkIconName = dark ? 'moon' : 'sun';

  return (
    <nav className="px-8 py-4 mb-4 border-b border-gray-400/10 text-xl flex items-center gap-2">
      <Link to="/" className="flex gap-2 items-center">
        <Logo className="h-10 w-10" fill="white" />
        <div className="font-mono text-left leading-4 text-sm hidden md:block">
          React
          <br />
          Starport
        </div>
      </Link>
      <div className="flex-auto"></div>
      <div className="flex items-center gap-4">
        <button
          className={classNames(
            'icon-btn outline-none p-1',
            debug ? '!text-red-400 bg-red-100 rounded' : undefined
          )}
          onClick={() => setDebug(debug => !debug)}
        >
          <Icon name="bug" />
        </button>
        <a
          className="icon-btn"
          rel="noreferrer"
          href="https://github.com/YanxinTang/react-starport"
          target="_blank"
          title="GitHub"
        >
          <Icon name="github" />
        </a>
        <button
          className="icon-btn outline-none"
          onClick={() => setDark(!dark)}
        >
          <Icon name={darkIconName} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

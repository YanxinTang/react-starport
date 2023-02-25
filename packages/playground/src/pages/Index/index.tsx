import { Starport } from '@react-starport/core';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import MyComponent from '../../components/MyComponent';
import { classNames } from '../../utils';
import { useGlobalConfig } from '../../components/GlobalConfig';
import { images } from '../../data';

export default function Index() {
  const { mode, setMode } = useGlobalConfig();

  return (
    <div className="px-6 py-2">
      <Logo className="w-full md:w-auto h-16 my-12 mx-auto" />
      <p className="mb-5">
        Transform React component across routes with animations
      </p>
      <div className="p-5 flex gap-2 justify-center">
        <button className="btn" onClick={() => setMode(!mode)}>
          Toggle Size
        </button>
      </div>
      <div
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-10 jusify-center"
      >
        {images.map((image, idx) => {
          const className = classNames(
            'transition-all duration-700',
            mode ? 'aspect-square m-2' : 'aspect-video'
          );
          return (
            <Link key={idx} to={`/${idx}`}>
              <Starport port={String(idx)} className={className}>
                <MyComponent
                  className={mode ? 'rounded shadow-lg' : ''}
                  index={idx}
                />
              </Starport>
            </Link>
          );
        })}
      </div>
      <div className="mt-16 mb-4">
        <h2 className="font-bold text-lg">Other examples</h2>
        <div>
          <Link to="/iphone" className="text-blue-700">
            iPhone Setting
          </Link>
        </div>
      </div>
    </div>
  );
}

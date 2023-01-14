import { Starport } from '@react-starport/core';
import { Link, useParams } from 'react-router-dom';
import { useGlobalConfig } from '../../components/GlobalConfig';
import MyComponent from '../../components/MyComponent';
import { images } from '../../data';
import NotFound from '../NotFound';

export default function MyComponentDetail() {
  let params = useParams();
  const { size, setSize, resetSize } = useGlobalConfig();

  const index = Number(params.idx);
  const next = (index + 1) % 12;

  if (Number.isNaN(index) || index >= images.length) {
    return <NotFound />;
  }

  const handleEnlarge = () => {
    setSize(size + 20);
  };

  return (
    <div className="px-6 py-2 flex flex-col items-center">
      <div className="p2 flex gap-2">
        <Link className="btn" to="/">
          Back
        </Link>
        <button className="btn" onClick={handleEnlarge}>
          Enlarge
        </button>
        <button className="btn" onClick={resetSize}>
          Reset
        </button>
      </div>
      <div className="circle-0 m-10 items-center max-w-3xl flex flex-col sm:flex-row gap-6">
        <Starport
          port={String(params.idx)}
          className="w-40 h-40 transition-all duration-700"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <MyComponent className="rounded-[50%] shadow-xl " index={index} />
        </Starport>

        <p className="flex-1 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="circle-0 m-10 items-center max-w-3xl flex flex-col sm:flex-row gap-6">
        <p className="flex-1 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Starport
          port={String(next)}
          className="w-40 h-40 transition-all duration-700"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <MyComponent className="rounded-[50%] shadow-xl" index={next} />
        </Starport>
      </div>
    </div>
  );
}

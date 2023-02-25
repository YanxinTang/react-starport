import { Link } from 'react-router-dom';
import iPhone from './iPhone 13 - Midnight.png';

interface IPhoneProps {}

const IPhone = (props: IPhoneProps) => {
  return (
    <div className='px-6 py-2 flex flex-col items-center'>
      <div className="p2 flex gap-2">
        <Link className="btn" to="/">
          Back
        </Link>
      </div>
      <div className="mt-8 relative" style={{ width: '400px' }}>
        <img
          className="relative z-10 pointer-events-none"
          src={iPhone}
          alt="iPhone"
        />
        <div className="absolute z-1" style={{ top: '24px', left: '32px' }}>
          <iframe
            title="iPhone"
            src="/iphone/setting"
            style={{
              width: '335px',
              height: '724px',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IPhone;
export type { IPhoneProps };

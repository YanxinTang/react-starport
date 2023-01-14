import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="my-16">
      <div>
        <Link className="btn" to="/">
          Back
        </Link>
      </div>

      <div className="mt-32">
        <h1 className="text-9xl text-gray-400">404</h1>
      </div>
    </div>
  );
}

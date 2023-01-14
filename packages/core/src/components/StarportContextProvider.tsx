import StarportContext from './StarportContext';
import { StarportOptions } from '../options';
import useStore from '../store/useStore';

interface StarportContextProviderProps {
  children?: React.ReactNode;
  options: Partial<StarportOptions>;
}

const StarportContextProvider = (props: StarportContextProviderProps) => {
  const [state, dispatch] = useStore();

  const context = {
    options: props.options,
    state,
    dispatch,
  };

  return (
    <StarportContext.Provider value={context}>
      {props.children}
    </StarportContext.Provider>
  );
};

export default StarportContextProvider;

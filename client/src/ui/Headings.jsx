import { useScreenSize } from '../context/ScreenSize';
import Animation from '../utils/Animation';

export const H1 = ({ title, center = false }) => {
  const { isSmallScreen } = useScreenSize();
  center = isSmallScreen ? true : center;

  return (
    <Animation type="1">
      <h1
        className={`${center ? 'text-center ' : ''} mb-6 text-3xl font-semibold text-colorBrand3 md:mb-10 md:text-4xl`}
      >
        {title}
      </h1>
    </Animation>
  );
};

export const H2 = ({ title, center = false }) => {
  const { isSmallScreen } = useScreenSize();
  center = isSmallScreen ? true : center;

  return (
    <Animation type="1">
      <h2
        className={`${center ? 'text-center ' : ''} mb-4 text-xl font-semibold text-colorBrand1 md:text-2xl`}
      >
        {title}
      </h2>
    </Animation>
  );
};

export const H3 = ({ title, center = false }) => {
  const { isSmallScreen } = useScreenSize();
  center = isSmallScreen ? true : center;

  return (
    <Animation type="1">
      <h3
        className={`${center ? 'text-center ' : ''} mb-3 text-lg font-semibold text-colorBrand1 md:text-xl`}
      >
        {title}
      </h3>
    </Animation>
  );
};

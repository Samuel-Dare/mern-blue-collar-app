import { useState } from 'react';
import Button from './Button';

function SeeMore({ key, children, type = 'pointer' }) {
  const [more, setMore] = useState(false);

  const handleSeeMore = () => {
    setMore((more) => !more);
  };

  return (
    <>
      {!more && (
        <Button type={type} onClick={handleSeeMore}>
          See More
        </Button>
      )}

      {more && children}
    </>
  );
}

export default SeeMore;

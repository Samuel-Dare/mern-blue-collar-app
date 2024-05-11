import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import FilterByDate from './FilterByDate';
import { useState } from 'react';
import FindServiceProvider from '../../pages/FindServiceProvider';
import FilterByTime from './FilterByTime';

function FilterForSmallScreen() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const navigate = useNavigate();

  const clicked = () => {
    setIsOverlayVisible((overlay) => !overlay);
  };

  const handleOpenOverlay = () => {
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div>
      <div className=" overflow-x-auto whitespace-nowrap p-4">
        <Button type="secondary" onClick={clicked}>
          Date: Within A Week
        </Button>{' '}
        <Button type="secondary" onClick={clicked}>
          Time: Evening
        </Button>{' '}
        <Button type="secondary" onClick={clicked}>
          #5000 - #20,000/hr
        </Button>{' '}
        <Button type="secondary" onClick={clicked}>
          More Filters
        </Button>{' '}
      </div>
      {isOverlayVisible && (
        <div className="fixed left-0 top-0 z-10 h-full max-h-screen w-full overflow-y-auto bg-colorGrey900 p-5 ">
          <div className="absolute right-10 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-colorGrey100">
            <Button type="pointer" onClick={clicked}>
              X
            </Button>
          </div>
          {/* <FindServiceProvider /> */}
          <FilterByDate />
          <FilterByTime />
        </div>
      )}
    </div>
  );
}

export default FilterForSmallScreen;

import './progressBarToFindBCollars.css';
import { useProgressBar } from '../../context/ProgressBarContext';

const ProgressBarToFindBCollars = () => {
  const { currentStage } = useProgressBar();

  return (
    <div className="flex-1">
      <progress max="4" value={currentStage} className="h-5 w-full"></progress>

      <label className="mt-2 text-center font-bold text-colorBrand1">
        Stage {currentStage} of 4
      </label>
    </div>
  );
};

export default ProgressBarToFindBCollars;

import Map from '../ui/Map';
import FilterBCollars from '../ui/filterBCollars';
import FilterBCollarsNav from '../ui/filterBCollarsNav';

function FindABCollar() {
  return (
    <div className="flex ">
      <div className="p-14">
        <FilterBCollarsNav />
        <FilterBCollars />
      </div>

      <Map />
    </div>
  );
}

export default FindABCollar;

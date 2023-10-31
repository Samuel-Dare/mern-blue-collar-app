import Map from '../ui/Map';
import FilterBCollars from '../ui/FilterBCollars';
import FilterBCollarsNav from '../ui/FilterBCollarsNav';

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

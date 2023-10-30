import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <div className="text-colorBrand900 md:text-logo mx-auto text-3xl font-extrabold md:mx-0">
      <NavLink to="/">BlueCollars</NavLink>
    </div>
  );
}

export default Logo;

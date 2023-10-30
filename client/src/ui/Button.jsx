import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-lg bg-colorBrand900 font-semibold uppercase tracking-wide text-colorGrey50 transition-colors duration-300 hover:bg-colorBrand800 focus:bg-colorBrand800 focus:outline-none focus:ring focus:ring-colorBrand800 focus:ring-offset-2 disabled:cursor-not-allowed w-full md:w-auto';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 md:text-lg',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm rounded-full border-2 border-colorGrey400 font-semibold uppercase tracking-wide text-colorGrey-400 transition-colors duration-300 hover:bg-colorGrey400 hover:text-colorGrey800 focus:bg-colorGrey400 focus:text-colorGrey800 focus:outline-none focus:ring focus:ring-colorGrey-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

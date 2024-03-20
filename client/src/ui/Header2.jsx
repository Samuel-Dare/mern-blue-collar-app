import Animation from '../utils/Animation';

export function HeaderTitle({ title }) {
  return (
    <h1 className="rounded-md text-3xl font-semibold text-colorGrey0 md:text-5xl">
      {title}
    </h1>
  );
}

function Header2({ label, title, bannerImage }) {
  return (
    <div className="h-[500px] md:h-screen">
      <div
        className={`flex h-full w-full 
         ${
           title === 'Contact Us' ? 'items-start pt-[50px]' : 'items-center'
         } justify-center md:items-center md:justify-center`}
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPositionY: `${label === 'services' ? 'top' : 'center'}`,
          backgroundPositionX: `${label === 'services' ? 'right' : ''}`,
        }}
      >
        <Animation type="1">
          {title ? <HeaderTitle title={title} /> : ''}
        </Animation>
      </div>
    </div>
  );
}

export default Header2;

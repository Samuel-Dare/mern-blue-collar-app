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
    <div className="h-[250px] md:h-[600px]">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
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

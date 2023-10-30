import Button from './Button';

export function HeaderOverlayContent() {
  return (
    <div className="bg-colorGrey100 shadow-colorShadowLg flex flex-col items-center justify-center space-y-8 rounded-md px-5 py-10 text-sm sm:h-[300px] sm:w-[600px] md:px-0 md:py-20 md:text-2xl">
      <h1 className="text-colorGrey800 text-2xl font-bold md:text-4xl">
        You need help? We've got you covered!
      </h1>

      <p className="border-colorGrey400 w-4/5 border-b"></p>

      <p>Want to book the services of top-rated Blue Collars today?</p>

      <div className="flex w-3/4 flex-col gap-5 md:flex-row md:gap-2">
        <input
          className="w-full rounded-md p-3 md:p-5"
          type="text"
          placeholder="Enter the service you need help with..."
        />
        <Button type="primary">Find A BCollar</Button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="h-screen">
      <div
        className="from-colorBrand800 via-colorGrey500 to-colorBrand700 h-1/3 w-full justify-center bg-gradient-to-r 
      md:flex md:h-full md:items-center 
      "
      >
        <main className="hidden md:block">
          <HeaderOverlayContent />
        </main>
      </div>

      <main className="md:hidden">
        <HeaderOverlayContent />
      </main>
    </div>
  );
}

export default Header;

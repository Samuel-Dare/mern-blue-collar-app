function AdvertStyle1Component({
  title,
  subTitle,
  l1,
  l2,
  l3,
  image,
  reverseOrder = false,
}) {
  return (
    <div
      className={`grid bg-colorGrey300 md:grid-cols-2 ${
        reverseOrder ? 'md:grid-flow-col' : ''
      }`}
    >
      <div className={reverseOrder ? 'order-2' : 'order-1'}>
        <img
          src={image}
          alt=""
          className={`rounded-md px-10 md:h-full md:rounded-none md:px-0 ${
            reverseOrder ? 'md:ml-auto' : ''
          }`}
        />
      </div>

      <div
        className={`lg:p-30 p-16 md:p-24 lg:space-y-4 ${
          reverseOrder ? 'order-1' : 'order-2'
        }`}
      >
        <h1 className="text-h1 text-colorBrand3">{title}</h1>
        <h2 className="text-colorGrey600">{subTitle}</h2>

        <ul>
          <li>&#10003; {l1}</li>

          <li>&#10003; {l2} </li>

          <li>&#10003; {l3}</li>
        </ul>
      </div>
    </div>
  );
}

export default AdvertStyle1Component;

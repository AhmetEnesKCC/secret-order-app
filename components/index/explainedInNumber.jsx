import NumberAnimation from "../numberAnimation";

const ExplainedInNumber = ({ Icon, text, data }) => {
  const length = data.toString().length;
  let base = "0.";
  for (var i = 0; i < length; i++) {
    if (!(i < length - 3)) {
      base += "9";
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-main-orange text-5xl  font-main font-extrabold">
        <NumberAnimation
          base={data < 1000 ? data / 2 : Math.floor(data * parseFloat(base))}
          top={data}
          second={1}
        />
      </h3>
      <p className=" text-4xl text-main-orange mt-5">{text}</p>
      {Icon && <Icon className="text-main-orange text-7xl lg:text-9xl" />}
    </div>
  );
};

export default ExplainedInNumber;

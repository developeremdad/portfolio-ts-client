import icon from "../assets/icons/empty-folder.png";
const EmptyData = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-green-200 p-5 rounded-md flex flex-col items-center">
        <img src={icon} alt="icon" className="size-16" />
        <h4 className="text-md font-semibold text-gray-500">Empty Data</h4>
      </div>
    </div>
  );
};

export default EmptyData;

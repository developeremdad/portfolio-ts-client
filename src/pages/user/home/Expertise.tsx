import frontend from "../../../assets/icons/front-end.png";
import backend from "../../../assets/icons/backend.png";

const Expertise = () => {
  return (
    <div className="mt-32">
      <h1 className="text-5xl font-semibold text-center">My Expertise</h1>

      <div className="border lg:w-9/12 container mx-auto mt-6">
        <div className="grid grid-cols-2 p-3">
          <div>
            <div className="flex items-center">
              <div className="self-start">
                <img src={frontend} width={50} height={50} alt="" />
              </div>
              <div className="ml-3 border-l-2 pl-3">
                <div className="text-2xl">
                  <span className="underline">Frontend</span> Development
                </div>

                <div className="mt-3 text-sm flex flex-wrap">
                  <div className="p-1 border rounded-sm mr-1 mb-1">React</div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">Redux</div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">
                    Tailwind CSS
                  </div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">
                    Ant Design
                  </div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">
                    Shad cn
                  </div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">
                    Bootstrap
                  </div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">CSS3</div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">React Hook Form</div>
                  <div className="p-1 border rounded-sm mr-1 mb-1">React Router Dom</div>
                  {/* <div className="p-1 border rounded-sm mr-1 mb-1"></div> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <img src={backend} width={50} height={50} alt="" />
              <div className="ml-3 border-l-2 pl-3 text-2xl">
                <span className="underline">Backend</span> Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

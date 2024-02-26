import backend from "../../../assets/icons/backend.png";
import frontend from "../../../assets/icons/front-end.png";
import setting from "../../../assets/icons/setting.png";

const Expertise = () => {
  return (
    <div className="mt-32">
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
      <h1 className="text-4xl font-semibold text-center mb-6">My Expertise</h1>
      </div>

      <div className="lg:w-9/12 container mx-auto p-5">
        {/* Backend part */}
        <div className="border rounded-md hover:shadow-lg p-4">
          <div className="flex items-center">
            <div className="self-start">
              <img src={backend} width={50} height={50} alt="" />
            </div>
            <div className="">
              <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                <span className="underline">Backend</span> (TS)
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;h3&gt;
              </span>
            </div>
            <div className="border-l-2 pl-4 ml-4 text-gray-500">
              <div className="text-sm flex flex-wrap py-2">
                <div className="p-1 border rounded-sm mr-1 mb-1">Node Js</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Express</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Mongoose</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">MongoDB</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Aggregate</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">JWT</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Zod Validation
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">SQL</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  PostgreSQL
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  VPS Hosting
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-400">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Frontend part */}
        <div className="border rounded-md hover:shadow-lg p-4 mt-6">
          <div className="flex items-center">
            <div className="self-start">
              <img src={frontend} width={50} height={50} alt="" />
            </div>
            <div className="">
              <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                <span className="underline">Frontend</span> (TS)
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;h3&gt;
              </span>
            </div>
            <div className="border-l-2 pl-4 ml-4 text-gray-500">
              <div className="text-sm flex flex-wrap py-2">
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Javascript
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Typescript
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">React</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Redux</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Firebase</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Tailwind CSS
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Ant Design
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Shad cn</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Bootstrap</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">CSS3</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  React Hook Form
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  React Router Dom
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-400">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Others and tools */}
        <div className="border rounded-md hover:shadow-lg p-4 mt-6">
          <div className="flex items-center">
            <div className="self-start">
              <img src={setting} width={50} height={50} alt="" />
            </div>
            <div className="">
              <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                <span className="underline">Other</span> Tools
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;h3&gt;
              </span>
            </div>
            <div className="border-l-2 pl-4 ml-4 text-gray-500">
              <div className="text-sm flex flex-wrap py-2">
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  VPS Hosting
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">CPanel</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Payment Gateway
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Postman With Documenting
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Git & GitHub
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">VS Code</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Debugging</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Vercel</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Figma</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Illustrator
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">MS Office</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">C</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">
                  Data Structure
                </div>
                <div className="p-1 border rounded-sm mr-1 mb-1">Algorithm</div>
                <div className="p-1 border rounded-sm mr-1 mb-1">OOP</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-400">&lt;/h3&gt;</span>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 p-3">
          <div>
            <div className="flex items-center">
              <img src={backend} width={50} height={50} alt="" />
              <div className="ml-3 border-l-2 pl-3 text-2xl">
                <span className="underline">Backend</span> Development
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Expertise;

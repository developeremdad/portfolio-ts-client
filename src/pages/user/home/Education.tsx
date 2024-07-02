const Education = () => {
  return (
    <div>
      <section id="education" className="py-12">
        <div className="container mx-auto text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Education
          </span>
        </div>

        <div className="lg:w-10/12 container mx-auto p-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {/* <!-- Education Item 1 --> */}
          <div className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50">
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  B.Sc(Hons) in Computer Science And Engineering(CSE)
                </div>
                <div className="text-gray-600">
                  National University Bangladesh
                </div>
                <div className="text-gray-600">2018 - 2022</div>
                <div className="text-gray-600">
                  3.30 <small className="text-[10px]">CGPA</small>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Education Item 2 --> */}
          <div className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50">
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Complete Web Development Course With Jhankar Mahbub
                </div>
                <div className="text-gray-600">Programming Hero</div>
                <div className="text-gray-600">2021 - 2022</div>
                <div className="text-gray-600">
                  100% <small className="text-[10px]">Marks</small>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50">
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  HSC In Science Group
                </div>
                <div className="text-gray-600">Dhaka City College</div>
                <div className="text-gray-600">2017</div>
                <div className="text-gray-600">
                  4.25 <small className="text-[10px]">GPA</small>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50">
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Dakhil In Science Group
                </div>
                <div className="text-gray-600">Akbar Al Ulum Alim Madrasha</div>
                <div className="text-gray-600">2015</div>
                <div className="text-gray-600">
                  5.00 (Golden) <small className="text-[10px]">GPA</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

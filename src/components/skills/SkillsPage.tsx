import * as React from "react";
import { Navigation } from "./Navigation";
import { SkillCard } from "./SkillCard";
import { TechImage } from "./TechImage";

export const SkillsPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col py-2 bg-white">
      <Navigation />
      <div className="flex flex-col items-start self-start pt-5 pr-20 pb-56 pl-5 mt-2.5 rounded-2xl bg-stone-50 max-md:pr-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[862px]">
          <div className="w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <SkillCard
                title="Frontend"
                className="w-[34%] max-md:ml-0 max-md:w-full"
              />
              <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                <div className="w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-4 mt-2.5 max-md:mt-10">
                        <TechImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4b726f652091f6c0c05e524e3286ad69cf6d0218ce41b138ef374a7cf55d19?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                          alt="Frontend technology 1"
                          className="w-24 aspect-[0.77]"
                        />
                        <TechImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e7f8e1987ccfbc8d1237f8e049307ebcfd1b3ac302e4e6a354163e7512117a?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                          alt="Frontend technology 2"
                          className="w-24 aspect-[0.77]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between items-start max-md:mt-10">
                        <TechImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb6cceff912c000f60be2b7acd5db95731b7794d9a6504d7143e90fcc6db34ef?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                          alt="Frontend technology 3"
                          className="w-24 aspect-[0.77]"
                        />
                        <TechImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22537e0c4a23805322d14da26c066007d441abb9c029457f81294cb64c447e72?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                          alt="Frontend technology 4"
                          className="mt-2.5 w-24 aspect-[0.77]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SkillCard
            title="Backend"
            className="mt-28 max-w-full w-[250px] max-md:mt-10 max-md:ml-2"
          >
            <div className="flex z-10 gap-4 self-end mt-0 mr-32 max-md:mr-2.5">
              <TechImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/705b33dd555511180f0f86a98199598999f3e72ecaa649c7ca4da0ed7fcb63b4?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                alt="Backend technology 1"
                className="self-start w-24 aspect-[0.77]"
              />
              <div className="flex flex-auto">
                <TechImage
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/faf479f20d6f8fc23520aba7c2466221f7c3b5ab1cb28cd4ce9093122a4c9f47?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                  alt="Backend technology 2"
                  className="max-w-full aspect-[0.9] w-[123px]"
                />
                <TechImage
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d05d26ef003aaac234736f00fef74139d22d8b06146d896213017369da9329e4?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                  alt="Backend technology 3"
                  className="max-w-full aspect-[0.93] w-[127px]"
                />
              </div>
            </div>
          </SkillCard>

          <SkillCard
            title="Tools"
            className="flex flex-col pt-6 mt-40 mb-0 ml-5 max-w-full w-[621px] max-md:mt-10 max-md:mb-2.5"
          >
            <div className="flex z-10 gap-6 self-end mt-0">
              <TechImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b256580da8362582264202572f7afe1119c7a0d415300b6ceec161fcb392c96?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                alt="Development tool 1"
                className="max-w-full aspect-[1.03] w-[133px]"
              />
              <TechImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/79af60395b0155315debd26432b101ecdb1b27c7812616b91ee7a7247f812b9d?placeholderIfAbsent=true&apiKey=3ec69f7f662e4cd29b5ee12b128de981"
                alt="Development tool 2"
                className="my-auto max-w-full aspect-[1.29] rounded-[50px] w-[117px]"
              />
            </div>
          </SkillCard>
        </div>
      </div>
    </div>
  );
};

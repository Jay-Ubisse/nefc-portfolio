import { Disclosure } from "@headlessui/react";
import { CaretDown } from "@phosphor-icons/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ServicesPage = () => {
  return (
    <div>
      <Header />
      <main className="w-2/3 mx-auto mt-8 bg-app-blue-100/20 p-10 rounded-md shadow-md shadow-slate-200">
        <h1 className="font-bold text-app-blue-200 text-xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5 mb-5">
          Our Services
        </h1>
        <div className="flex flex-col gap-2 text-white">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span>IT tutoring and creation</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-app-blue-100">
                  <p>
                    At NEFC Projects Limitada, we offer comprehensive IT
                    tutoring and creation services, equipping individuals and
                    organizations with the knowledge and solutions they need to
                    thrive in the digital age. Our young and highly skilled
                    tutors provide personalized IT tutoring, helping learners of
                    all levels master essential computer skills, programming
                    languages, and software applications. We help you
                    confidently navigate the digital landscape and leverage
                    technology to achieve your goals.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span>Foreign Company/business representation</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-app-blue-100">
                  <p>
                    Expanding your operations abroad, navigating local
                    regulations, establishing connections, and building a solid
                    presence can be daunting. But that’s where we step in to
                    guide businesses to success in foreign representation. Our
                    experienced team understands local business practices,
                    regulations, and cultural nuances. We help you establish a
                    strong presence by connecting you with stakeholders,
                    facilitating negotiations, and providing valuable guidance.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span>General consulting service</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-app-blue-100">
                  <p>
                    As a trusted partner, we bring expertise and insights to
                    help you overcome challenges and make informed decisions.
                    Through our collaborative approach and industry insights, we
                    provide unique solutions for strategic planning, process
                    optimization, market research, and more. Whether you're a
                    startup, small business, or established enterprise, our
                    general consulting services are designed to unlock your
                    potential. We strive to help you achieve sustainable growth,
                    operational efficiency, and a competitive edge in the market
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span>Projects development and management</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-app-blue-100">
                  <p>
                    We understand that embarking on projects can be a complex
                    journey but with the right team, planning, and execution
                    success is guaranteed. With our expertise and dedicated
                    team, we seamlessly guide your projects from inception to
                    completion. Our tailored solutions encompass meticulous
                    planning, resource optimization, risk mitigation, and
                    performance monitoring
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span> International business facilitation</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-app-blue-100">
                  <p>
                    Unlocking the potential of local, regional and international
                    markets can take be a very complicated process involving
                    time and effort. At NEFC Projects Limitada, we understand
                    the complexities and obstacles businesses face when
                    expanding globally. That's why we're here to help you
                    throughout the entire process.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </main>
      <Footer />
    </div>
  );
};

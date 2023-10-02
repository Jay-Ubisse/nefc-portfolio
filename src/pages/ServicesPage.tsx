import { Disclosure } from "@headlessui/react";
import { CaretDown } from "@phosphor-icons/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ServicesPage = () => {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-red-800 to-app-blue-200 p-10">
        <h1 className="font-bold text-white text-3xl border-b-2 border-white pb-2 w-fit pr-5 mb-5">
          Our Services
        </h1>
        <div className="flex flex-col gap-2 text-white">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span>Online Learning Tutoring & creation</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                  <p>
                    At NEFC Projects Limitada, we offer comprehensive Learning
                    mentoring and creation services, equipping individuals and
                    organizations with the knowledge and solutions they need to
                    thrive in the digital age. Our young and highly skilled
                    mentors provide personalized learning mentorship, helping
                    learners of all levels to master essential computer skills,
                    programming languages, and software applications and other
                    modern technologies. We help them to confidently navigate
                    the digital landscape and leverage knowledge of technology
                    to achieve their goals.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-xl px-4 py-4 text-left text-xl font-medium text-white bg-gradient-to-br from-app-blue-100 to-app-blue-200">
                  <span>Representation of International Partners</span>
                  <CaretDown
                    weight="bold"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-appgreen-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                  <p>
                    We also do channel our international partners' interests in
                    Mozambique and in the rest of SADC countries; navigating
                    local regulations, establishing connections, and building a
                    solid presence can be daunting. But that’s where we step in
                    to guide businesses to success. Our experienced consultants
                    understand local business practices, regulations, cultural
                    nuances and are well connected within SADC region as well.
                    We help our partners to establish a strong presence by
                    connecting you with stakeholders, facilitating negotiations,
                    and providing valuable guidance.
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
                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
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
                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
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
                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
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

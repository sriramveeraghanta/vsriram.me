const PROJECTS = [
  {
    title: "LiberoMeet",
    description:
      "LiberoMeet is a video conferencing application using WEBRTC. Enables users to create events and meetings in the conference rooms. This is a fully functional virtual meeting tool like GoogleMeet and Zoom with features like chat, notes and whiteboard inside the video room.",
    technologies: [{ icon: "", name: "NodeJS" }],
  },
  {
    title: "AssetMatch",
    description:
      "Crate provides user interface and secure permissions for the users to access files locally using a local server that was deployed and tested in the college. Currently working on converting this project into an NPM module for better accessibility.",
    technologies: [{ icon: "", name: "NodeJS" }],
  },
  {
    title: "KeatsApp",
    description:
      "KeatsApp is an interactive learning application for kids to learn programming. It provides an intuitive learning environment for kids with attractive challenges using different learning methods.",
    technologies: [{ icon: "", name: "NodeJS" }],
  },
  {
    title: "SATnPapaer",
    description:
      "SATnPaper is a premium online platform for Indian students aspiring undergraduate admissions to US colleges by training them for the ACT and SAT exams using mock tests.",
    technologies: [{ icon: "", name: "VueJS" }],
  },
  {
    title: "Crate",
    description:
      "Crate provides user interface and secure permissions for the users to access files locally using a local server that was deployed and tested in the college. Currently working on converting this project into an NPM module for better accessibility.",
    technologies: [{ icon: "", name: "NodeJS" }],
  },
  {
    title: "Collabcode",
    description:
      "Collaborative online text editor with syntax highlighter. Each user is provided with a separate workspace that can be shared with others for collaboration.",
    technologies: [{ icon: "", name: "VueJS" }],
  },
  //   {
  //     title: "Github Clone Android App",
  //     description:
  //       "An Android Application using Github APIs. It enables to find the Github users using their username and retrieve their profile, list of repositories owned and starred repositories. Implemented a tab layout to display and recycler view for rendering the repository cards list.",
  //     technologies: [{ icon: "", name: "NodeJS" }],
  //   },
];

export default async function WorkPage() {
  return (
    <section className="py-16">
      <div className="flex justify-center w-100">
        <div className="w-[70%] mt-10 lg:col-span-7 lg:mt-0">
          <h1 className="text-2xl text-center font-bold mb-12">
            Things I Build For Fun
          </h1>
          <dl className="space-y-10">
            {PROJECTS.map((faq) => (
              <div key={faq.title}>
                <dt className="text-base font-bold leading-7">{faq.title}</dt>
                <dd className="mt-2 text-base leading-7 ">{faq.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

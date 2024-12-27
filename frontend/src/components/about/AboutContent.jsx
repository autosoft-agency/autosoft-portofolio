import WhoWe from "../../assets/who-we-are.png";
import Mission from "../../assets/our-mission.png";
import Sameh from "../../assets/team-member-sameh.png";
import Kassab from "../../assets/team-member-kassab.jpg";

const AboutContent = () => {
  const teamMembers = [
    {
      name: "Mahmoud Sameh",
      role: "Full Stack Developer",
      // imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
      imgSrc: Sameh, // Replace with actual image URL
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mohammed Kassab",
      role: "Full Stack Developer",
      imgSrc: Kassab,
      linkedin: "#",
      github: "#",
    },
    {
      name: "Nada",
      role: "Full Stack Developer",
      // imgSrc: Sameh,
      imgSrc: "https://via.placeholder.com/150",
      linkedin: "#",
      github: "#",
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gray-50 text-gray-800 p-20">

      {/* Who We Are Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-lg leading-relaxed">
            Our journey is fueled by a deep commitment to excellence and a vision to empower
            businesses and individuals in the ever-evolving digital landscape. From startups and
            small businesses to established enterprises, we take pride in creating tailored
            solutions that drive growth, enhance engagement, and bring visions to life.
          </p>
          <img
            // src="https://via.placeholder.com/400"
            src={WhoWe}
            alt="Who We Are"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-lg leading-relaxed">
              Our mission is to empower businesses and individuals by delivering cutting-edge
              digital solutions that bridge the gap between innovation and functionality. We strive
              to create meaningful, tailor-made websites and applications that not only meet our
              clients`&apos;` needs but also inspire and engage their audiences.
          </p>
          <img
            // src="https://via.placeholder.com/400"
            src={Mission}
            alt="Who We Are"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section> */}

      {/* Our Mission Section */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={Mission}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg leading-relaxed">
              Our mission is to empower businesses and individuals by delivering cutting-edge
              digital solutions that bridge the gap between innovation and functionality. We strive
              to create meaningful, tailor-made websites and applications that not only meet our
              clients`&apos;` needs but also inspire and engage their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      {/* <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Team Members</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-500 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  LinkedIn
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="container mx-auto py-16 px-4">
  <h2 className="text-3xl font-bold text-blue-900 mb-8">Team Members</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
      >
        {/*team images*/}
        <img
          src={member.imgSrc}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        {/* team details */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-blue-500">{member.role}</p>
          <div className="flex gap-4 mt-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              LinkedIn
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default AboutContent;
export default function Projects() {
  const projects = [
    {
      title: "Giftible",
      desc: "A donation-based eCommerce platform for NGOs and users.",
      link: "https://giftible.in"
    },
    {
      title: "Carbon Tracker",
      desc: "Helps Indian coal mines monitor emissions and carbon sinks.",
      link: "https://github.com/simarjeet-arora/carbon-tracker"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
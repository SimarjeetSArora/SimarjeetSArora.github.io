export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Contact</h3>
      <p className="text-gray-700 mb-6">
        Interested in working together or just want to say hi? Reach out!
      </p>
      <a
        href="mailto:simarjeet.arora.dev@gmail.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}
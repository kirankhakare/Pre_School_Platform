import { motion } from "framer-motion";

function AdmissionCTA() {
  return (
    <section className="py-20 px-6 bg-white">

      <motion.div
        className="max-w-4xl mx-auto bg-white p-12   text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="text-6xl mb-6">🎈</div>

        <h2 className="text-4xl text-sky-900 font-bold mb-4">
          Ready to Start the Journey?
        </h2>

        <p className="mb-8 text-lg text-sky-900">
          Give your child the best start with our kindergarten programs.
        </p>

        <motion.button
          className="bg-white text-sky-900 font-bold text-xl px-10 py-4 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          Enquire Now 🎒
        </motion.button>

      </motion.div>

    </section>
  );
}

export default AdmissionCTA;
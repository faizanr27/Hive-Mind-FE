import { motion } from "motion/react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Search",
      description:
        "Find exactly what you need with AI-powered embeddings and vector databases.",
    },
    {
      title: "Intuitive Organization",
      description:
        "Easily categorize notes, ideas, and files for quick access.",
    },
    {
      title: "Accessible Anywhere",
      description: "Your knowledge, always at your fingertips—anytime, anywhere.",
    },
    {
      title: "Privacy First",
      description:
        "Your data stays yours with top-notch encryption and security.",
    },
  ];

  return (
    <div className="px-6 py-24 text-white max-w-7xl mx-auto">
        <div className=" flex flex-col h-[70vh] justify-center mt-44 xxs:mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="xxs:text-5xl text-3xl font-bold text-center mb-12 bg-gradient-to-br from-white via-gray-600  bg-clip-text text-transparent "
      >
        Why <span className="">choose Hive Mind ?</span>
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * index, duration: 0.4 }}
              className="p-6 bg-gradient-to-tl from-zinc-800 via-neutral-950 to-transparent rounded-2xl border border-zinc-600/20"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {/* <img src={feature.img} /> */}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

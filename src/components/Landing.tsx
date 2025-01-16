import { Button } from "./Button";
import { CursorSpotlight } from "./Landing Components/CursorSpotlight";
import FeaturesSection from "./Landing Components/Features";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const MotionButton = motion.create(Button);

export function Landing() {
  return (
    <div className="absolute inset-0 min-h-screen dotted-background overflow-x-hidden">
      <CursorSpotlight />
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-neutral-950 to-transparent">
        <div className="absolute bottom-56 right-[200px] w-36 h-[1000px] rotate-45 ">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-full h-full bg-gradient-to-t to-slate-600/20 via-slate-600/30 from-transparent rounded-tl-[800px] rounded-tr-[800px] blur-2xl "
          />
        </div>
        <div className="flex items-center justify-center h-full flex-col max-w-7xl mx-auto gap-2 ">
          <div className="overflow-hidden relative min-h-max sm:h-[100px]">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className=" bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 bg-clip-text text-transparent text-8xl font-semibold"
            >
              Hive Mind
            </motion.h1>
          </div>
          {/* <p className=" bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 bg-clip-text text-transparent text-3xl font-semibold ">Unlock Your Second Brain</p> */}
          <div className="overflow-hidden relative min-h-max ">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-start text-sm p-2 bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 bg-clip-text text-transparent xxs:text-2xl xxs:text-center font-semibold translate-y-[50]"
            >
              Your personal knowledge hub to store, organize, and retrieve ideas
              effortlessly.
            </motion.p>
          </div>
          <div className="flex flex-row gap-4 justify-start items-start">
            <Link to="/signup">
            <MotionButton 
            variant="primary" 
            text="Get Started"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 1.5 }}
            /></Link>
            <MotionButton 
            variant="secondary" 
            text="Learn More" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 1.6 }}
            />
          </div>
        </div>
        <div className="bg-gradient-to-bl from-black via-neutral-950 to-transparent">
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import {useAuth} from '../context/AuthContext'


const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } },
};

interface Profileprops {
  dropdownOpen: boolean
}

const ProfilePopover  = ({dropdownOpen}:Profileprops) => {
  const { name, logout } = useAuth();


  return(
    <>
              {dropdownOpen && (
            <div className="relative right-48 bottom-6">
              <AnimatePresence>
              {dropdownOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute bottom-full mb-2 left-0 w-48 bg-white dark:bg-background border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
                  >
                    <div className="px-4 py-2 text-gray-700 dark:text-gray-300">{name}</div>

                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
    </>
  )
}

export default ProfilePopover
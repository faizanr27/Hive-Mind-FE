const Footer = () => {
  return (
    <footer className="min-h-max py-6 mt-40 sm:mt-0 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row justify-between w-full items-start">
            <div className="flex flex-col">
              <div className="flex flex-col flex-wrap gap-4 mb-4 md:mb-0 text-start text-sm p-2 bg-gradient-to-bl from-zinc-300 via-zinc-600 to-zinc-900 bg-clip-text text-transparent xxs:text-md xxs:text-start font-semibold">
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
                <a href="#privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </div>
              <div className="text-start text-sm p-2 bg-gradient-to-bl from-zinc-300 via-zinc-600 to-zinc-900 bg-clip-text text-transparent xxs:text-md xxs:text-center font-semibold">
                © {new Date().getFullYear()} <span className="">Hive Mind</span>
                . All Rights Reserved.
              </div>
            </div>

            <div className="flex space-x-4 text-zinc-600/80">
              <a
                href="https://x.com/__faizanr__"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56c-.89.39-1.84.65-2.83.77a4.92 4.92 0 0 0 2.17-2.72 9.8 9.8 0 0 1-3.1 1.19 4.91 4.91 0 0 0-8.36 4.48A13.93 13.93 0 0 1 1.64 3.15a4.91 4.91 0 0 0 1.52 6.55 4.85 4.85 0 0 1-2.23-.62v.06a4.91 4.91 0 0 0 3.94 4.82 4.94 4.94 0 0 1-2.22.08 4.91 4.91 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54 13.93 13.93 0 0 0 7.55 22c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A9.98 9.98 0 0 0 24 4.56z" />
                </svg>
              </a>


              <a
                href="https://github.com/faizanr27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <path d="M12 .297C5.375.297 0 5.67 0 12.299c0 5.3 3.438 9.8 8.207 11.385.6.112.793-.256.793-.572v-2.022c-3.338.725-4.042-1.415-4.042-1.415-.546-1.384-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.239 1.838 1.239 1.07 1.834 2.807 1.305 3.492.998.11-.774.419-1.305.762-1.605-2.665-.305-5.466-1.331-5.466-5.931 0-1.311.469-2.384 1.235-3.222-.123-.304-.536-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.478 11.478 0 0 1 6 0c2.29-1.552 3.298-1.23 3.298-1.23.655 1.656.242 2.879.12 3.183.769.838 1.233 1.91 1.233 3.222 0 4.61-2.807 5.623-5.478 5.921.43.37.823 1.103.823 2.222v3.293c0 .32.192.694.8.576 4.765-1.587 8.2-6.086 8.2-11.385C24 5.67 18.624.297 12 .297z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                >
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.527.07.07 0 0 0-.073.035c-.213.37-.45.855-.617 1.237-1.849-.276-3.68-.276-5.487 0-.18-.398-.41-.867-.63-1.237a.075.075 0 0 0-.073-.035A19.736 19.736 0 0 0 3.683 4.369a.064.064 0 0 0-.032.027C.533 9.043-.319 13.572.099 18.057a.083.083 0 0 0 .032.057 19.97 19.97 0 0 0 5.993 3.033.071.071 0 0 0 .078-.027c.462-.63.873-1.295 1.226-1.988a.07.07 0 0 0-.038-.096 11.314 11.314 0 0 1-1.606-.774.072.072 0 0 1-.007-.121c.108-.082.216-.168.319-.256a.068.068 0 0 1 .07-.007c3.372 1.531 7.014 1.531 10.335 0a.07.07 0 0 1 .073.007c.104.088.211.174.319.256a.072.072 0 0 1-.006.121 11.243 11.243 0 0 1-1.607.774.07.07 0 0 0-.037.096c.375.693.786 1.358 1.227 1.988a.07.07 0 0 0 .078.027 19.933 19.933 0 0 0 6.003-3.033.071.071 0 0 0 .032-.057c.563-5.799-.928-10.284-3.552-13.661a.061.061 0 0 0-.047-.028zM8.02 15.797c-1.087 0-1.975-.993-1.975-2.21 0-1.217.872-2.21 1.975-2.21 1.11 0 2.002 1.003 1.975 2.21 0 1.217-.872 2.21-1.975 2.21zm7.966 0c-1.087 0-1.975-.993-1.975-2.21 0-1.217.872-2.21 1.975-2.21 1.11 0 2.002 1.003 1.975 2.21 0 1.217-.872 2.21-1.975 2.21z" />
                </svg>
                </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <h1 className="bg-gradient-to-b from-zinc-300 via-zinc-600/40 to-zinc-900/5 bg-clip-text text-transparent text-8xl font-semibold">
            HIVE MIND
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

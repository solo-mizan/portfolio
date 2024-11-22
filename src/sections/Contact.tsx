import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImg from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="relative z-0 bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 rounded-3xl text-center text-gray-900 md:text-left overflow-hidden">
          <div
            className="-z-10 absolute inset-0 opacity-5"
            style={{ backgroundImage: `url(${grainImg.src})` }}
          ></div>
          <div className="flex md:flex-row flex-col items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="inline-flex items-center gap-2 border-gray-900 bg-gray-900 px-6 border rounded-xl w-max h-12 text-white">
                <span className="font-semibold uppercase">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

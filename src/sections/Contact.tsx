import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImg from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12">
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
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <Link
                href={"mailto:mizan.rahman.cs@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-gray-900 bg-gray-900 px-6 border rounded-xl w-full md:w-[180px] h-12 text-white hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold uppercase">Email Me</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>

              <Link
                href="tel:+8801719402933"
                className="inline-flex items-center justify-center gap-2 border-gray-900 bg-gray-900 px-6 border rounded-xl w-full md:w-[180px] h-12 text-white hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold uppercase">Call Me</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

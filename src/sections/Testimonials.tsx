import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "../components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Md. Mannan",
    position: "Marketing Head @ Tens Agro",
    text: "Working with Mizan was a game-changer for our company. Their innovative web app streamlined our ordering system, transforming a backlogged process into an efficient, fully automated solution. Their professionalism and technical expertise exceeded our expectations. Highly recommended!",
    avatar: memojiAvatar1,
  },
  {
    name: "Jiyaul Islam",
    position: "Bank Officer @ Janata Bank PLC.",
    text: "I’ve always wanted a way to preserve and share the memories of those from our village who passed away. Mizan turned this vision into reality with a beautifully designed web app. It’s intuitive, efficient, and ensures these records are accessible to everyone. Their professionalism and technical expertise were exceptional, and I’m thrilled with the result. Highly recommended!",
    avatar: memojiAvatar2,
  },
  {
    name: "Sohag Hossain",
    position: "Pesticide Seller @ Sohag Rayhan Traders",
    text: "The machine-learning model developed by Mizan has revolutionized how I diagnose rice tree diseases. It’s accurate, efficient, and saves me a tremendous amount of time. Their innovation has made a significant impact on my work. Highly recommended!",
    avatar: memojiAvatar3,
  },
  {
    name: "Harsh Chauhan",
    position: "Tech Lead @ Cling Info Tech",
    text: "During Mizan’s 6-month internship at Cling Info Tech, they showcased exceptional backend development skills. Their ability to grasp complex concepts quickly and deliver reliable solutions impressed the entire team. Their dedication, problem-solving abilities, and eagerness to learn made them a valuable asset. I have no doubt they will excel in their career as a software developer.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex mt-12 lg:mt-20 overflow-x-clip">
          <div className="flex flex-none gap-8 my-4 -py-4 pr-8 animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="p-6 md:p-8 max-w-xs md:max-w-md lg:max-w-xl hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex flex-shrink-0 bg-gray-700 rounded-full max-w-full size-14">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 font-semibold text-transparent uppercase tracking-widest">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 font-serif text-3xl text-center md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
        {description}
      </p>
    </>
  );
};

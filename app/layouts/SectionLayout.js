export default function SectionLayout({ children }) {
    return (
      <section className="flex flex-col gap-6 w-[64rem] sm:w-[24rem]  lg:p-4">
        {children}
      </section>
    );
  }
  
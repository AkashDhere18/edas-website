import Link from "next/link";
// Temporary shell for inner pages — replace when each page is designed.
export default function PageStub({ title, crumb }) {
  return (
    <>
      <section className="bg-linear-to-r from-brand-navy to-brand-plum py-20 text-white">
        <div className="container-x">
          <p className="text-sm text-slate-300">
            <Link href="/" className="hover:text-brand-orange">
              Home
            </Link>{" "}
            / {crumb ?? title}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white! md:text-5xl">{title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <p className="max-w-2xl text-slate-500">
            Page content coming soon — this inner page will follow the same structure as the Sila Group reference.
          </p>
        </div>
      </section>
    </>
  );
}

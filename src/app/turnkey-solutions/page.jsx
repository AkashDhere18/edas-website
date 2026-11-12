// import PageStub from "@/components/PageStub";
// export const metadata = { title: "Turnkey Solutions" };
// export default function Page() {
//   return <PageStub title="Turnkey Solutions" />;
// }
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";
import ClientsMarquee from "@/components/ClientsMarquee";
import ContactSection from "@/components/ContactSection";
// import NewsletterBand from "@/components/NewsletterBand";
import { turnkeyHero, turnkeyServices, turnkeySectors, clients, turnkeyContacts } from "@/data/turnkey";

export const metadata = {
  title: "Turnkey Solutions",
  description: "EDAS turnkey contracting — general contracting, waterproofing, retrofitting and infrastructure for residential, commercial and industrial projects.",
};

export default function TurnkeySolutionsPage() {
  return (
    <>
      <PageHero title={turnkeyHero.title} image={turnkeyHero.image} serif={false}>{turnkeyHero.text}</PageHero>
      <ServiceCards serif={false} title="Our Turnkey Services" items={turnkeyServices} />
      <ServiceCards serif={false} title="Sectors We Build For" items={turnkeySectors} />
      <ClientsMarquee clients={clients} />
      <ContactSection contacts={turnkeyContacts} />
      {/* <NewsletterBand /> */}
    </>
  );
}

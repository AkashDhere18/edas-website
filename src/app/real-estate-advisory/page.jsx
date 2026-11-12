// import PageStub from "@/components/PageStub";
// export const metadata = { title: "Real Estate Advisory" };
// export default function Page() {
//   return <PageStub title="Real Estate Advisory" />;
// }
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";
import ClientsMarquee from "@/components/ClientsMarquee";
import ContactSection from "@/components/ContactSection";
import NewsletterBand from "@/components/NewsletterBand";
import { advisoryHero, capitalProviderServices, developerServices, clients, advisoryContacts } from "@/data/advisory";

export const metadata = {
  title: "Real Estate Advisory",
  description: "EDAS real estate advisory services for capital providers, landowners and developers — feasibility, due diligence, project monitoring and PMC.",
};

export default function RealEstateAdvisoryPage() {
  return (
    <>
      <PageHero title={advisoryHero.title} image={advisoryHero.image}>{advisoryHero.text}</PageHero>
      <ServiceCards title="Capital Provider Services" items={capitalProviderServices} cols={3} />
      <ServiceCards title="Landowner & Developer Services" items={developerServices} cols={4} tint />
      <ClientsMarquee clients={clients} />
      <ContactSection contacts={advisoryContacts} />
      {/* <NewsletterBand /> */}
    </>
  );
}


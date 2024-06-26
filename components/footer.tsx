import { ContentWrapper } from "./content-wrapper";
import { Logo } from "./logo";
import Link from "next/link";
import { routes } from "@/lib/routes";


export const Footer = () => {
  return (
    <footer className="p-6 text-primary bg-slate-200	 pb-12">
      <ContentWrapper className="flex items-start md:items-end justify-start md:justify-between gap-2 flex-col md:flex-row">
        <div>
          <Logo />
        </div>
        <div className="flex gap-2 items-center justify-start md:justify-end">
          <div className="flex items-start md:items-end justify-center flex-col gap-1 text-primary text-sm">
            {/* <p>
              Andino B2B Marketplace.
            </p> */}
            <Link href={'mailto:team@andinomkt.com'}>
              <p className="text-blue-500">Contact Us</p>
            </Link>
            <Link href={"/privacy"}>
              <p className="text-blue-500">Privacy Policy</p>
            </Link>            
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

import { ContentWrapper } from "@/components/content-wrapper";
import { SlideShow } from "@/components/slideshow";
import { VideoBackground } from "@/components/video-background";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "@/db/db";
import { products, stores } from "@/db/schema";
import { eq } from "drizzle-orm";
import { PropsWithChildren } from "react";
import { ProductAndStore } from "./products/page";
import { ProductCard } from "@/components/storefront/product-card";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { FeatureBanner } from "../components/feature-banner";
import {
  AlarmClock,
  DollarSign,
  FastForward,
  Phone,
  ShieldCheck,
  Truck,
  User,
  PackageCheck,
  UserCheck,
  Wind,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { TextInputWithLabel } from "@/components/text-input-with-label";
import Image from "next/image";
import { ScanIcon } from "lucide-react";

export default async function Home() {
  const storeAndProduct = (await db
    .select({
      product: products,
      store: {
        id: stores.id,
        name: stores.name,
        slug: stores.slug,
      },
    })
    .from(products)
    .leftJoin(stores, eq(products.storeId, stores.id))
    .limit(8)) as ProductAndStore[];

  return (
    <div className="">
      <VideoBackground />
      <ContentWrapper>
        <div className="md:my-20 my-10">
          
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="m-10">
                  {" "}
                  
                  <Heading size="h2">Why do we exist?</Heading>
                  <Heading size="h1">
                    To empower Andean sellers who produce excellent goods 
                  </Heading>
                  <div className="mt-8">
                    <Heading size="h4">
                    Our marketplace exists as a testament that countries in the
                    Andean region can be competitively attractive with their
                    industrial & manufacturing productive sectors. We
                    want people to instantly think of high-quality when they hear the word Andes.
                  </Heading>
                  </div>
                  <div className="mt-12">
                    <Link href={routes.products}>
                      <Button variant="default">View Featured Seller</Button>
                    </Link>
                  </div>
                </div>
                <div className="">
                  <Image
                    className="rounded-3xl bg-chiliRed"
                    src="/alfadomus-export.jpeg"
                    width={650}
                    height={650}
                    alt="Andean region"
                  ></Image>
                </div>
                
              </div>
            </div>
        </div>
        <Tabs defaultValue="for-buyers">
          <div className="flex items-center justify-center mt-2 mb-8">
            <TabsList>
              <TabsTrigger value="for-buyers">For Buyers</TabsTrigger>
              <TabsTrigger value="for-sellers">For Sellers</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="for-sellers">
            <HomePageLayout
              heading={<Heading size="h1">Enter our trading channel.</Heading>}
              subheading={
                <Heading size="h2">
                  Access the biggest Andean marketplace and let the orders come to you.
                </Heading>
              }
            >
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12">
                <FeatureBanner
                  heading="No sale, no fee"
                  subheading="We only take a fee from every sale you make, so it is in our best interest that you sell and rest assured you won't be charged otherwise."
                  icon={<DollarSign size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Access to U.S. buyers"
                  subheading="Increase your sales from exports thanks to Andino's access to businesses interested in purchasing from South America. "
                  icon={<User size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Integrated Notifications"
                  subheading="Once you create your account and start selling, we will notify you on every new order made. Plus, you can contact the customer through our chat."
                  icon={<AlarmClock size={64} color="#FB4400" />}
                />
              </div>
              <div className="flex items-center justify-center mt-12">
                <Link href={routes.signUp}>
                  <Button size="lg">Start Selling</Button>
                </Link>
              </div>
            </HomePageLayout>
          </TabsContent>
          <TabsContent value="for-buyers">
            <HomePageLayout
              heading={<Heading size="h1">Online shopping made easy.</Heading>}
              subheading={
                <Heading size="h2">
                  Shop the highest quality products from Andean sellers.
                </Heading>
              }
            >
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12 mb-12">
                <FeatureBanner
                  heading="Production quality"
                  subheading="Making sure that our producers are crafting products up to the standards of this platform, we check the quality of the products that are sold on Andino."
                  icon={<PackageCheck size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Producer verification"
                  subheading="So that you can rest easy, every seller in our platform has to go through a verification process, assuring the individuals selling on our platform are the top businesses in the region."
                  icon={<UserCheck size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Purchase protection"
                  subheading="We are fully committed to your satisfaction. If the rare event that an order is wrong, in poor state, or never arrived, we will perform reasonable refunds up to 100% of the order value."
                  icon={<ShieldCheck size={64} color="#FB4400" />}
                />
              </div>
              <Heading size="h2">Top Picks</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto mt-4">
                {storeAndProduct.map((item) => (
                  <ProductCard
                    key={item.product.id}
                    storeAndProduct={item}
                    hideButtonActions={true}
                  />
                ))}
              </div>
              <div className="mt-12 grid place-content-center">
                <Link href={routes.products}>
                  <Button variant="default">View All Products</Button>
                </Link>
              </div>
              {/* <div className="bg-blue-900 text-white w-full p-12 rounded-md mt-12 flex items-center flex-col gap-2 justify-center text-center">
                <p className="uppercase tracking-wide text-sm font-medium">
                  Featured seller
                </p>
                <p className="text-3xl font-bold">Tim&apos;s Terrific Toys</p>
                <p>
                  Top seller of the month! Tim&apos;s Toys has been selling toys
                  for 10 years and is a top rated seller on the platform.
                </p>
                <Link
                  href={routes.products + "?seller=tims-toys"}
                  className="mt-6"
                >
                  <Button variant="secondary">Explore seller</Button>
                </Link>
              </div> */}
              {/* <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12">
                <FeatureBanner
                  heading="Free Shipping"
                  subheading="Free shipping on all orders over $50"
                  icon={<Truck size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="24/7 Customer Support"
                  subheading="Have a question? Get in touch."
                  icon={<Phone size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Best prices"
                  subheading="We offer the best prices on the market."
                  icon={<DollarSign size={64} color="#FB4400" />}
                />
              </div> */}
            </HomePageLayout>
          </TabsContent>
        </Tabs>
      </ContentWrapper>
    </div>
  );
}

const HomePageLayout = (
  props: PropsWithChildren<{
    heading: React.ReactNode;
    subheading: React.ReactNode;
  }>
) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-12 pt-2">
        {props.heading}
        <div className="text-slate-600">{props.subheading}</div>
      </div>
      {props.children}
    </>
  );
};

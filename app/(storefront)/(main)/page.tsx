import { ContentWrapper } from "@/components/content-wrapper";
import { SlideShow } from "@/components/slideshow";
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
      <SlideShow />
      <ContentWrapper>
        <div className="my-20">
          
            <div className="">
              <div className="flex">
                
                <div className="m-10">
                  {" "}
                  
                  <Heading size="h2">Why do we exist?</Heading>
                  <Heading size="h1">
                    To prove the Andean region can compete worldwide
                  </Heading>
                  <div className="mt-8">
                    <Heading size="h4">
                    Our marketplace exists as a testament that countries in the
                    Andean region can be competitively attractive with their
                    industrial & manufacturing productive sectors worldwide. We
                    want people to instantly recognize the Andes on the map.
                  </Heading>
                  </div>
                  
                  <div className="mt-12">
                    <Link href={routes.products}>
                      <Button variant="default">View Featured Sellers</Button>
                    </Link>
                  </div>
                </div>
                <Image
                  className="rounded-3xl"
                  src="/peruvian-andes.jpg"
                  width={1900}
                  height={1500}
                  alt="Andean region"
                ></Image>
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
              heading={<Heading size="h1">Sell online with ease.</Heading>}
              subheading={
                <Heading size="h2">
                  Access our global marketplace and sell your <br /> products to
                  over 1 million visitors.
                </Heading>
              }
            >
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12">
                <FeatureBanner
                  heading="No monthly fees"
                  subheading="Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
                  icon={<DollarSign size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Access to millions of buyers"
                  subheading="Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
                  icon={<User size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Quick and easy setup"
                  subheading="Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
                  icon={<AlarmClock size={64} color="#FB4400" />}
                />
              </div>
              <div className="flex items-center justify-center mt-12">
                <Link href={routes.signUp}>
                  <Button size="lg">Create account</Button>
                </Link>
              </div>
            </HomePageLayout>
          </TabsContent>
          <TabsContent value="for-buyers">
            <HomePageLayout
              heading={<Heading size="h1">Online shopping made easy.</Heading>}
              subheading={
                <Heading size="h2">
                  Shop hundreds of products from Andean sellers.
                </Heading>
              }
            >
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12 mb-12">
                <FeatureBanner
                  heading="Production quality"
                  subheading="Making sure that our producers are crafting products up to the standards of this platform. We love checking the quality of the products that are sold on Andino!"
                  icon={<PackageCheck size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Producer verification"
                  subheading="So that you can rest easy, every seller in our platform has to go through a verification process, assuring the individuals selling on our platform are good and legit businesses."
                  icon={<UserCheck size={64} color="#FB4400" />}
                />
                <FeatureBanner
                  heading="Purchase protection"
                  subheading="We are committed to your satisfaction. If the order is wrong, in poor state, or never arrived, we are committed to reasonable refunds up to 100% of the order value."
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

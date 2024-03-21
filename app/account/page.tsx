"use client";
import { useUser } from "@clerk/nextjs";
import { HeadingAndSubheading } from "@/components/admin/heading-and-subheading";
import { Heading } from "@/components/ui/heading";

export default function Account() {
  const { isLoaded, isSignedIn, user } = useUser();
  // console.log(isLoaded);
  return (
    <>
      {/* <HeadingAndSubheading
        heading="Account"
        subheading="Here in the account dashboard you can manage your account both for selling and for buying. Check the dashboard tabs to view or change information about your products or orders."
      />  */}
      <div className="flex justify-center text-center">
        <div>
          {isLoaded && <Heading size="h4">Hello @{user?.username}</Heading>}

          <p className="text-gray-500 text-lg">
            Here in the account dashboard you can manage your account both for
            selling and for buying.<br></br> Check the dashboard tabs to view or
            change information about your products, orders or purchases.
          </p>
        </div>
      </div>
    </>
  );
}

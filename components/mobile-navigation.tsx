"use client";

import { useState } from "react";
import { Icon, Menu, LucideProps, Shirt, ShirtIcon, User } from "lucide-react";
import React from 'react';
import { routes } from "@/lib/routes";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductSearch } from "./storefront/product-search";
import { ProductImage } from "./product-image";
import { images } from "@/lib/assets";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const MobileNavigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <Sheet
        open={isMobileNavOpen}
        onOpenChange={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <SheetTrigger>
          <div className="p-2 rounded-md border border-border">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent
          size="full"
          className="overflow-auto lg:max-w-[600px] sm:max-w-[400px] xl:max-w-[650px]"
        >
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="my-6">
            <ProductSearch />
          </div>
          <div className="flex items-start justify-center gap-2 flex-col">
          <NavBarLink
            href={routes.products}
            name="Products"
            icon={ShirtIcon}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
          <NavBarLink
            href={routes.account}
            name="Account"
            icon={User}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
          
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

interface NavBarLinkProps {
  href: string;
  name: string;
  icon: Icon; // Cambiamos el tipo de prop a 'Icon'
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarLink: React.FC<NavBarLinkProps> = (props) => {
  const router = useRouter();

  return (
    <div className="flex gap-2 items-center justify-between w-full rounded-md border border-border p-3">
      <props.icon size={24} /> {/* Renderizamos el componente Icon */}
      <div className="w-full text-left">
        <Button
          variant="link"
          onClick={() => {
            router.push(props.href);
            props.setIsMobileNavOpen(false);
          }}
        >
          {props.name}
        </Button>
      </div>
    </div>
  );
};

export default NavBarLink;
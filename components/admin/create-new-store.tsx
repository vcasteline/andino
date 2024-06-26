"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";
import { type createStore } from "@/server-actions/store";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export const CreateNewStore = (props: { createStore: typeof createStore }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [storeName, setStoreName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    props.createStore(storeName).then((res) => {
      setIsLoading(false);
      if (!res.error) {
        setStoreName("");
        router.refresh();
      }
      toast({
        title: res.message,
        description: res.action,
      });
    });
  };

  return (
    <div className="grid grid-cols-2 gap-12">
      <form className="flex flex-col gap-6 col-span-1" onSubmit={handleSubmit}>
        <div>
          <Heading size="h3">Create your store</Heading>
          <p className="mt-2">
            Enter the name of your store below and press create.
          </p>
        </div>
        <div>
          <Label htmlFor="store-name">Store Name</Label>
          <Input
            className="mt-2"
            id="store-name"
            name="store-name"
            placeholder="e.g. Tim's Toys"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        <div className="w-fit">
          <Button type="submit" className="flex gap-2" disabled={isLoading}>
            {!!isLoading && <Loader2 size={18} className="animate-spin" />}
            Create
          </Button>
        </div>
      </form>
      <div className="col-span-1">
        <Heading size="h3">Why sell on Andino?</Heading>
        <p className="mt-2">
          To increase your products reach in the U.S. market.
        </p>
        <ul className="list-disc ml-6 mt-8 flex flex-col gap-2">
          <li>Competitive custom-tailored comission</li>
          <li>No sale, no comission</li>
          <li>Access to U.S. buyers</li>
        </ul>
      </div>
    </div>
  );
};

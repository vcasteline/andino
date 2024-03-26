import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes, singleLevelNestedRoutes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { hasConnectedStripeAccount } from "@/server-actions/stripe/account";
import { AlertCircle, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

export const PaymentConnectionStatus = async () => {
  const connectedStripeAccount = await hasConnectedStripeAccount();

  return (
    <DropdownMenu>
      <Link
        href={singleLevelNestedRoutes.account.payments}
      >
        <DropdownMenuTrigger
          className={cn(
            "flex items-center gap-1 justify-center rounded-md border py-1 px-3 text-sm text-center",
            connectedStripeAccount
              ? "bg-green-100 border-green-500 text-green-700"
              : "bg-yellow-100 border-yellow-500 text-yellow-700"
          )}
        >

          {connectedStripeAccount ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          <p className="font-bold">Payments:</p>
          <p>{connectedStripeAccount ? "Connected" : "Not connected"}</p>
          {/* <ChevronDown size={18} /> */}
        </DropdownMenuTrigger>

      </Link>

      {/* <DropdownMenuContent>
        <DropdownMenuLabel>Payments</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            className="w-full h-full" 
            href={singleLevelNestedRoutes.account.payments}
          >
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Learn more</DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
};

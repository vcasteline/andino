import { PropsWithChildren } from "react";
import { ContentWrapper } from "./content-wrapper";
import { cn } from "@/lib/utils";

export const AnnouncementBar = ({
  columns,
  description,
  backgroundColor = "#FF2E01",
  textColor = "text-secondary",
  children,
}: PropsWithChildren<{
  columns: 1 | 2;
  description: string;
  backgroundColor?: string;
  textColor?: string;
}>) => {
  return (
    <div style={{backgroundColor:"#D0381D"}} className={cn("text-secondary p-2", textColor)}>
      <ContentWrapper className="py-2">
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-between text-center sm:text-left text-sm sm:text-base",
            columns === 1 && "justify-center"
          )}
        >
          <div className={cn(columns === 1 && "text-center")}>
            {description}
          </div>
          {children}
        </div>
      </ContentWrapper>
    </div>
  );
};

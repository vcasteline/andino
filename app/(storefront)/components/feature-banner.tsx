export const FeatureBanner = (props: {
  heading: string;
  subheading: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-10 border border-border rounded-md flex flex-col gap-3 justify-center">
      <div className="flex justify-center">{props.icon}</div>
      <div>
        <p className="font-semibold text-xl flex justify-center pb-4">{props.heading}</p>
        <p className="flex justify-center">{props.subheading}</p>
      </div>
    </div>
  );
};

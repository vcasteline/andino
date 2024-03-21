import Image from 'next/image'
export const Logo = () => {
  return (
    <>
      <Image src="/andino-logo.png" 
      width={200}
      height={200}
      alt="Andino Logo"></Image>
    </>
  );
};

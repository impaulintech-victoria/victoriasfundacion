import { cn } from "@/lib/utils";
import Image from "next/image";

interface FadedBgImageProps {
  src: string;
  alt: string;
  className?: string;
  bgColor?: string;
}

const FadedBgImage = ({ src, alt, className, bgColor }: FadedBgImageProps) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        priority
      />
      <div className={cn("absolute inset-0 opacity-50", bgColor)} />
    </>
  );
};

export default FadedBgImage;

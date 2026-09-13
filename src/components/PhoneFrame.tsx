import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* side buttons */}
      <div className="absolute top-20 -left-[3px] h-7 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute top-32 -left-[3px] h-12 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute top-44 -left-[3px] h-12 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute top-28 -right-[3px] h-14 w-[3px] rounded-r-sm bg-neutral-800" />

      <div className="rounded-[2.6rem] bg-neutral-900 p-[10px] shadow-[18px_28px_45px_-15px_rgba(20,20,20,0.45)]">
        <div className="relative overflow-hidden rounded-[2.05rem] bg-white">
          <Image
            src={src}
            alt={alt}
            width={533}
            height={1147}
            className="block w-full"
            priority={priority}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

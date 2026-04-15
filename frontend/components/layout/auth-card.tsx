import Image from "next/image";

export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center py-25 px-6 font-sans">
      <div className="w-full">
        <div className="mb-30 flex justify-center">
          <Image
            src="/logo-ifpb.svg"
            alt="Instituto Federal Paraíba"
            width={240}
            height={55}
            priority
          />
        </div>
        {children}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function AuthIllustration() {
  return (
    <div className="relative w-full h-[55vh]">
      <Image
        src="/auth-illustration.svg"
        alt="Auth illustration"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

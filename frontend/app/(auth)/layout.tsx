import AuthIllustration from "@/components/illustrations/auth-illustration";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-span-5 flex items-center justify-center bg-white px-10">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <div className="col-span-7 flex items-center justify-center bg-gray-50 px-10">
        <AuthIllustration />
      </div>
    </div>
  );
}

import Image from "next/image";

interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
}

export function AuthHeader({
  title = "Welcome back!",
  subtitle = "Sign in to access your properties, manage rooms, and track tenants",
}: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Brand Icon */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image
          src="/images/auth/logo-icon.svg"
          alt="FloHouse Logo"
          width={49}
          height={49}
          className="w-full h-full object-contain drop-shadow"
          priority
        />
      </div>

      {/* Typography */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-medium text-white tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-white/80 max-w-sm mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

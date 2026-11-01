import { AuthHeader } from "@/components/auth/auth-header";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="w-full bg-[#294255]/70 backdrop-blur-xl border-2 border-white/90 rounded-[26px] shadow-2xl p-6 sm:p-10 md:p-14 space-y-8 animate-fadeIn">
      {/* Header with Logo & Welcome Title */}
      <AuthHeader
        title="Welcome back!"
        subtitle="Sign in to access your guided meditations, daily practices, and personal journey"
      />

      {/* Main Login Form */}
      <LoginForm />
    </div>
  );
}

"use server";

import { loginSchema } from "@/lib/validations/auth";
import type { AuthResponse } from "@/types/auth";

export async function loginAction(
  _prevState: AuthResponse | null,
  formData: FormData
): Promise<AuthResponse> {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    rememberMe: formData.get("rememberMe") === "on" || formData.get("rememberMe") === "true",
  };

  const validation = loginSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Dữ liệu đăng nhập không hợp lệ.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validation.data;

  // Giả lập xác thực (có thể thay thế bằng Auth.js / NextAuth / Supabase / Database verification)
  if (email === "admin@flohouse.vn" && password === "123456") {
    return {
      success: true,
      message: "Đăng nhập thành công!",
      user: {
        id: "usr_01",
        name: "Nguyễn Văn A",
        email: "admin@flohouse.vn",
        role: "manager",
      },
    };
  }

  // Chấp nhận đăng nhập demo cho tài khoản bất kỳ để test giao diện
  return {
    success: true,
    message: "Đăng nhập thành công (Demo)!",
    user: {
      id: "usr_demo",
      name: "Nguyễn Văn A",
      email,
      role: "manager",
    },
  };
}

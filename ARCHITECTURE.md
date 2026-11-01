# FloHouse - Kiến Trúc Hệ Thống (System Architecture)

Dự án được xây dựng trên **Next.js 16 (App Router)**, **React 19**, **TypeScript** và **Tailwind CSS**, bám sát thiết kế Figma của hệ thống **FloHouse**.

---

## 🏗️ 1. Cấu Trúc Thư Mục (Folder Structure)

```text
src/
├── actions/                  # Server Actions (Xử lý logic backend, mutate data)
│   └── auth.ts               # Action xác thực đăng nhập, session
├── app/                      # Next.js App Router (Routing & Layouts)
│   ├── (auth)/               # Route Group cho luồng xác thực (không chứa sidebar)
│   │   ├── layout.tsx        # Layout auth với hình nền căn hộ kính mờ
│   │   └── login/
│   │       └── page.tsx      # Trang Đăng nhập (/login)
│   ├── (dashboard)/          # Route Group cho hệ thống quản trị (chứa Sidebar + Header)
│   │   ├── layout.tsx        # Khung layout chuẩn của FloHouse (Sidebar 250px + Header 101px)
│   │   ├── page.tsx          # Bảng điều khiển (Dashboard)
│   │   ├── rooms/            # Quản lý danh sách phòng & chi tiết phòng
│   │   ├── tenants/          # Quản lý người thuê
│   │   ├── contracts/        # Quản lý hợp đồng
│   │   └── invoices/         # Quản lý hóa đơn & chi tiết hóa đơn
│   ├── globals.css           # Cấu hình Tailwind CSS & Custom utilities
│   ├── layout.tsx            # Root HTML layout (Font Inter, Metadata)
│   └── page.tsx              # Root redirect
├── components/               # UI Components tái sử dụng
│   ├── auth/                 # Components riêng cho Auth
│   │   ├── auth-header.tsx   # Header tiêu đề, logo & subtitle
│   │   └── login-form.tsx    # Client Component: form state, validation, pending state
│   ├── icons/                # Các icon tùy biến / thương hiệu
│   │   └── google-icon.tsx   # Icon đa sắc Google SVG
│   ├── layout/               # Components bố cục khung chính
│   │   ├── sidebar.tsx       # Sidebar FloHouse chuẩn Figma
│   │   └── top-header.tsx    # Thanh tìm kiếm & thông báo
│   └── ui/                   # Design System Primitives (Accessible UI)
│       ├── button.tsx        # Nút bấm đa biến thể (primary, pill, glass, outline)
│       ├── input.tsx         # Ô nhập liệu có icon, bo góc [20px], hiển thị lỗi
│       ├── label.tsx         # Nhãn form chuẩn WCAG
│       └── checkbox.tsx      # Checkbox tùy biến Remember Me
├── lib/                      # Tiện ích chung & Helpers
│   ├── utils.ts              # Hàm `cn()` (clsx + tailwind-merge)
│   └── validations/          # Schema xác thực dữ liệu (Zod)
│       └── auth.ts           # Schema validation cho Login
└── types/                    # Định nghĩa kiểu dữ liệu TypeScript
    └── auth.ts               # Types cho User, Session, Credentials
```

---

## 🎨 2. Design System Tokens (FloHouse)

* **Background chính:** `#EAF2F8` (Xanh pastel dịu mắt).
* **Menu Active & Primary Color:** `#5C84BE`.
* **Màu chữ chính:** `#253F5B`.
* **Màu chữ phụ / Placeholder:** `#BCC6D5`.
* **Glassmorphism Auth Box:** `bg-[#294255]/70 border-2 border-white/90 rounded-[26px] backdrop-blur-xl`.
* **Icon System:** Toàn bộ hệ thống sử dụng **Lucide Icons** kết hợp SVG thuần cho logo bên thứ ba (Google).

---

## 🔒 3. Luồng Xác Thực (Authentication Flow)

1. Người dùng nhập Email & Mật khẩu trên Client (`src/components/auth/login-form.tsx`).
2. Xác thực định dạng trước bằng **Zod Schema** ở tầng Client để phản hồi tức thì.
3. Kích hoạt Server Action `loginAction` (`src/actions/auth.ts`) thông qua React Transition (`isPending`).
4. Xử lý phản hồi thành công và điều hướng vào trang quản lý chính.

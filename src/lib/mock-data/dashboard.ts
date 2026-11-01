import type { DashboardData } from "@/types/dashboard";

export const mockDashboardData: DashboardData = {
  managerName: "Nguyễn Văn A",
  unreadNotifications: 99,
  kpis: {
    totalRooms: 150,
    occupiedRooms: 95,
    availableRooms: 55,
    occupancyRate: "63,33%",
  },
  monthlyRevenue: {
    totalFormatted: "768.000.000 đ",
    chartData: [
      { day: 1, revenue: 150 },
      { day: 5, revenue: 280 },
      { day: 10, revenue: 420 },
      { day: 15, revenue: 580 },
      { day: 20, revenue: 720 },
      { day: 25, revenue: 890 },
      { day: 30, revenue: 768 },
      { day: 35, revenue: 950 },
      { day: 40, revenue: 1100 },
      { day: 45, revenue: 1250 },
    ],
  },
  unpaidInvoices: {
    count: 2,
    totalAmount: 17650000,
  },
  maintenance: {
    pendingCount: 1,
    inProgressCount: 3,
  },
};

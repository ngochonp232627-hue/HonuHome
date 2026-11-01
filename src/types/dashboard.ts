export interface KpiMetric {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  changeRate?: string;
  trend?: "up" | "down" | "neutral";
}

export interface RevenueDataPoint {
  day: number;
  revenue: number; // đơn vị triệu VNĐ
}

export interface UnpaidInvoiceSummary {
  count: number;
  totalAmount: number;
}

export interface MaintenanceSummary {
  pendingCount: number;
  inProgressCount: number;
}

export interface DashboardData {
  managerName: string;
  unreadNotifications: number;
  kpis: {
    totalRooms: number;
    occupiedRooms: number;
    availableRooms: number;
    occupancyRate: string;
  };
  monthlyRevenue: {
    totalFormatted: string;
    chartData: RevenueDataPoint[];
  };
  unpaidInvoices: UnpaidInvoiceSummary;
  maintenance: MaintenanceSummary;
}

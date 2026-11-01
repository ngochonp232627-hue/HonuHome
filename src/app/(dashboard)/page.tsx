import { Building2, UserCheck, KeyRound, TrendingUp } from "lucide-react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { UnpaidInvoicesCard } from "@/components/dashboard/unpaid-invoices-card";
import { MaintenanceCard } from "@/components/dashboard/maintenance-card";
import { mockDashboardData } from "@/lib/mock-data/dashboard";

export const metadata = {
  title: "Bảng Điều Khiển | HonuHome",
  description: "Bảng điều khiển quản lý phòng và doanh thu HonuHome",
};

export default function DashboardPage() {
  const { kpis, monthlyRevenue, unpaidInvoices, maintenance, managerName } =
    mockDashboardData;

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Welcome Greeting Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#253F5B] tracking-tight">
            Xin chào, {managerName}
          </h1>
          <span className="text-2xl sm:text-3xl animate-bounce">👋</span>
        </div>
        <p className="text-sm sm:text-base text-[#67829E] font-medium flex items-center gap-1.5">
          <span>Chúc bạn một ngày mới tốt lành</span>
          <span>😊</span>
        </p>
      </div>

      {/* 4 Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <KpiCard
          label="Tổng số phòng"
          value={kpis.totalRooms}
          icon={Building2}
          variant="primary"
        />
        <KpiCard
          label="Đang Thuê"
          value={kpis.occupiedRooms}
          icon={UserCheck}
          variant="success"
        />
        <KpiCard
          label="Phòng Trống"
          value={kpis.availableRooms}
          icon={KeyRound}
          variant="warning"
        />
        <KpiCard
          label="Tỷ lệ lấp đầy"
          value={kpis.occupancyRate}
          icon={TrendingUp}
          variant="info"
        />
      </div>

      {/* Bottom Section: Revenue Chart & Quick Action Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Revenue Chart (takes 6 cols on lg/xl) */}
        <div className="lg:col-span-12 xl:col-span-6">
          <RevenueChart
            data={monthlyRevenue.chartData}
            totalFormatted={monthlyRevenue.totalFormatted}
          />
        </div>

        {/* Unpaid Invoices Widget (takes 3 cols on xl) */}
        <div className="lg:col-span-6 xl:col-span-3">
          <UnpaidInvoicesCard summary={unpaidInvoices} />
        </div>

        {/* Maintenance Requests Widget (takes 3 cols on xl) */}
        <div className="lg:col-span-6 xl:col-span-3">
          <MaintenanceCard summary={maintenance} />
        </div>
      </div>
    </div>
  );
}

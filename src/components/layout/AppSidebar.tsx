import {
  LayoutDashboard,
  FileText,
  FilePlus,
  BookOpen,
  CheckSquare,
  ClipboardList,
  Activity,
  ShoppingCart,
  FileSignature,
  Wallet,
  Receipt,
  Map,
  BarChart3,
  PieChart,
  Building2,
  Users,
  Shield,
  ScrollText,
  Settings,
  Anchor,
  LogOut,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const menuGroups = [
  {
    label: "الرئيسية",
    items: [
      { title: "لوحة التحكم", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "العمليات الاستثمارية",
    items: [
      { title: "العمليات المقترحة", url: "/operations", icon: FileText },
      { title: "إضافة عملية", url: "/operations/add", icon: FilePlus },
      { title: "دراسة المشروع", url: "/project-study", icon: BookOpen },
      { title: "اعتماد الخطة", url: "/plan-approval", icon: CheckSquare },
      { title: "الخطة الاستثمارية", url: "/investment-plan", icon: ClipboardList },
    ],
  },
  {
    label: "التنفيذ والمتابعة",
    items: [
      { title: "متابعة التنفيذ", url: "/execution", icon: Activity },
      { title: "إدارة المشتريات", url: "/procurement", icon: ShoppingCart },
      { title: "العقود", url: "/contracts", icon: FileSignature },
    ],
  },
  {
    label: "الإدارة المالية",
    items: [
      { title: "المستخلصات والمدفوعات", url: "/finance", icon: Wallet },
      { title: "إضافة مستخلص", url: "/finance/add-invoice", icon: Receipt },
    ],
  },
  {
    label: "GIS والتقارير",
    items: [
      { title: "خريطة المشاريع", url: "/gis", icon: Map },
      { title: "تقارير التنفيذ", url: "/reports/execution", icon: BarChart3 },
      { title: "تقارير الميزانية", url: "/reports/budget", icon: PieChart },
      { title: "تقارير الإدارات", url: "/reports/departments", icon: Building2 },
    ],
  },
  {
    label: "إدارة النظام",
    items: [
      { title: "المستخدمين", url: "/users", icon: Users },
      { title: "الصلاحيات", url: "/roles", icon: Shield },
      { title: "سجل العمليات", url: "/audit-log", icon: ScrollText },
      { title: "الإعدادات", url: "/settings", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar side="right" collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
            <Anchor className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-sidebar-foreground">هيئة ميناء دمياط</span>
              <span className="text-xs text-sidebar-foreground/60">الخطة الاستثمارية</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                      tooltip={item.title}
                    >
                      <NavLink
                        to={item.url}
                        end
                        className="hover:bg-sidebar-accent"
                        activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="تسجيل الخروج">
              <NavLink to="/login" className="hover:bg-sidebar-accent text-sidebar-foreground/70">
                <LogOut className="h-4 w-4 shrink-0" />
                {!collapsed && <span>تسجيل الخروج</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

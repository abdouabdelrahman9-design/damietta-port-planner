import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppLayout } from "@/components/layout/AppLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, Wallet, Activity, FileText, ArrowUpLeft, ArrowDownLeft } from "lucide-react";

const kpis = [
  { title: "إجمالي العمليات", value: "47", change: "+12%", icon: FileText, trend: "up" },
  { title: "إجمالي الميزانية", value: "2.4 مليار ج.م", change: "+8%", icon: Wallet, trend: "up" },
  { title: "نسبة التنفيذ", value: "68%", change: "+5%", icon: Activity, trend: "up" },
  { title: "المصروفات", value: "1.6 مليار ج.م", change: "-3%", icon: TrendingUp, trend: "down" },
];

const barData = [
  { name: "يناير", ميزانية: 400, مصروفات: 240 },
  { name: "فبراير", ميزانية: 300, مصروفات: 139 },
  { name: "مارس", ميزانية: 200, مصروفات: 180 },
  { name: "أبريل", ميزانية: 278, مصروفات: 190 },
  { name: "مايو", ميزانية: 189, مصروفات: 148 },
  { name: "يونيو", ميزانية: 239, مصروفات: 200 },
];

const pieData = [
  { name: "مكتمل", value: 15, color: "hsl(152, 60%, 40%)" },
  { name: "جاري التنفيذ", value: 20, color: "hsl(212, 72%, 32%)" },
  { name: "متأخر", value: 7, color: "hsl(0, 72%, 51%)" },
  { name: "لم يبدأ", value: 5, color: "hsl(215, 10%, 45%)" },
];

const lineData = [
  { month: "يناير", تنفيذ: 20 },
  { month: "فبراير", تنفيذ: 35 },
  { month: "مارس", تنفيذ: 42 },
  { month: "أبريل", تنفيذ: 50 },
  { month: "مايو", تنفيذ: 58 },
  { month: "يونيو", تنفيذ: 68 },
];

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground text-sm">نظرة عامة على الخطة الاستثمارية لهيئة ميناء دمياط</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <Card key={kpi.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{kpi.title}</p>
                    <p className="text-2xl font-bold mt-1">{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {kpi.trend === "up" ? (
                        <ArrowUpLeft className="h-3 w-3 text-success" />
                      ) : (
                        <ArrowDownLeft className="h-3 w-3 text-destructive" />
                      )}
                      <span className={`text-xs ${kpi.trend === "up" ? "text-success" : "text-destructive"}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <kpi.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">الميزانية مقابل المصروفات</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="ميزانية" fill="hsl(212, 72%, 32%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="مصروفات" fill="hsl(38, 92%, 50%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">حالة المشاريع</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1 text-xs">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">نسبة التنفيذ الشهرية</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="تنفيذ" stroke="hsl(212, 72%, 32%)" strokeWidth={2} dot={{ fill: "hsl(212, 72%, 32%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const budgetData = [
  { name: "رصيف 3", ميزانية: 450, مصروفات: 200 },
  { name: "الصوامع", ميزانية: 320, مصروفات: 48 },
  { name: "ساحة التخزين", ميزانية: 200, مصروفات: 144 },
  { name: "البوابة الذكية", ميزانية: 50, مصروفات: 50 },
];

const spendingPie = [
  { name: "تم صرفه", value: 442, color: "hsl(212, 72%, 32%)" },
  { name: "متبقي", value: 578, color: "hsl(210, 15%, 92%)" },
];

const BudgetReports = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">تقارير الميزانية</h1>
          <p className="text-sm text-muted-foreground">تحليل الميزانية مقابل المصروفات الفعلية</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>الميزانية مقابل المصروفات (مليون ج.م)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="ميزانية" fill="hsl(212, 72%, 32%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="مصروفات" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>نسبة الصرف الكلية</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={spendingPie} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value">
                    {spendingPie.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center">
                <p className="text-2xl font-bold">43%</p>
                <p className="text-sm text-muted-foreground">نسبة الصرف</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default BudgetReports;

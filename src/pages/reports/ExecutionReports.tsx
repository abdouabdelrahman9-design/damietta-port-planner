import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const executionData = [
  { name: "تطوير رصيف 3", مخطط: 60, فعلي: 45 },
  { name: "صوامع الغلال", مخطط: 30, فعلي: 15 },
  { name: "ساحة التخزين", مخطط: 80, فعلي: 72 },
  { name: "البوابة الذكية", مخطط: 100, فعلي: 100 },
];

const monthlyProgress = [
  { month: "يناير", نسبة: 25 },
  { month: "فبراير", نسبة: 35 },
  { month: "مارس", نسبة: 42 },
  { month: "أبريل", نسبة: 50 },
  { month: "مايو", نسبة: 58 },
  { month: "يونيو", نسبة: 68 },
];

const ExecutionReports = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">تقارير التنفيذ</h1>
          <p className="text-sm text-muted-foreground">مقارنة التنفيذ المخطط بالفعلي</p>
        </div>

        <Card>
          <CardHeader><CardTitle>نسبة التنفيذ: مخطط vs فعلي</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={executionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="مخطط" fill="hsl(212, 72%, 32%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="فعلي" fill="hsl(38, 92%, 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>تطور نسبة التنفيذ الشهرية</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="نسبة" stroke="hsl(152, 60%, 40%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ExecutionReports;

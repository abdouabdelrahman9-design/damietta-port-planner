import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const deptData = [
  { name: "إدارة الأرصفة", مشاريع: 2, ميزانية: 630 },
  { name: "إدارة الصوامع", مشاريع: 1, ميزانية: 320 },
  { name: "إدارة المستودعات", مشاريع: 1, ميزانية: 200 },
  { name: "تكنولوجيا المعلومات", مشاريع: 1, ميزانية: 50 },
  { name: "إدارة الملاحة", مشاريع: 1, ميزانية: 85 },
];

const DepartmentReports = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">تقارير الإدارات</h1>
          <p className="text-sm text-muted-foreground">المشاريع والميزانيات حسب الإدارة</p>
        </div>

        <Card>
          <CardHeader><CardTitle>عدد المشاريع حسب الإدارة</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deptData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" width={130} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="مشاريع" fill="hsl(212, 72%, 32%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>الميزانية حسب الإدارة (مليون ج.م)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deptData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" width={130} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="ميزانية" fill="hsl(38, 92%, 50%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default DepartmentReports;

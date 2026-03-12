import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const approvedOps = [
  { id: 1, name: "تطوير رصيف الحاويات رقم 3", department: "إدارة الأرصفة", budget: "450,000,000", progress: 45, status: "جاري التنفيذ" },
  { id: 2, name: "توسعة ساحة التخزين", department: "إدارة المستودعات", budget: "200,000,000", progress: 72, status: "جاري التنفيذ" },
  { id: 3, name: "بناء بوابة ذكية للميناء", department: "إدارة تكنولوجيا المعلومات", budget: "50,000,000", progress: 100, status: "مكتمل" },
  { id: 4, name: "إنشاء صوامع غلال جديدة", department: "إدارة الصوامع", budget: "320,000,000", progress: 15, status: "جاري التنفيذ" },
];

const InvestmentPlan = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">الخطة الاستثمارية المعتمدة</h1>
          <p className="text-sm text-muted-foreground">العمليات المعتمدة ضمن الخطة الاستثمارية الحالية</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">إجمالي العمليات</p>
              <p className="text-3xl font-bold text-primary mt-1">4</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">إجمالي الميزانية</p>
              <p className="text-3xl font-bold text-primary mt-1">1.02 مليار</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">متوسط التنفيذ</p>
              <p className="text-3xl font-bold text-success mt-1">58%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>العمليات المعتمدة</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">#</TableHead>
                  <TableHead className="text-right">اسم العملية</TableHead>
                  <TableHead className="text-right">الإدارة</TableHead>
                  <TableHead className="text-right">الميزانية (ج.م)</TableHead>
                  <TableHead className="text-right w-40">نسبة التنفيذ</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {approvedOps.map((op) => (
                  <TableRow key={op.id}>
                    <TableCell>{op.id}</TableCell>
                    <TableCell className="font-medium">{op.name}</TableCell>
                    <TableCell>{op.department}</TableCell>
                    <TableCell>{op.budget}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={op.progress} className="h-2 flex-1" />
                        <span className="text-xs font-medium w-10">{op.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={op.status === "مكتمل" ? "default" : "secondary"}>
                        {op.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default InvestmentPlan;

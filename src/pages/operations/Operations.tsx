import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockOperations = [
  { id: 1, name: "تطوير رصيف الحاويات رقم 3", department: "إدارة الأرصفة", budget: "450,000,000", status: "معتمد", date: "2026-01-15" },
  { id: 2, name: "إنشاء صوامع غلال جديدة", department: "إدارة الصوامع", budget: "320,000,000", status: "قيد الدراسة", date: "2026-02-01" },
  { id: 3, name: "تحديث نظام الملاحة البحرية", department: "إدارة الملاحة", budget: "85,000,000", status: "مرفوض", date: "2026-01-20" },
  { id: 4, name: "توسعة ساحة التخزين", department: "إدارة المستودعات", budget: "200,000,000", status: "معتمد", date: "2026-03-01" },
  { id: 5, name: "تركيب رافعات جسرية", department: "إدارة الأرصفة", budget: "180,000,000", status: "قيد الدراسة", date: "2026-02-15" },
  { id: 6, name: "بناء بوابة ذكية للميناء", department: "إدارة تكنولوجيا المعلومات", budget: "50,000,000", status: "معتمد", date: "2026-01-10" },
];

const statusColor: Record<string, string> = {
  "معتمد": "bg-success/10 text-success border-success/20",
  "قيد الدراسة": "bg-warning/10 text-warning border-warning/20",
  "مرفوض": "bg-destructive/10 text-destructive border-destructive/20",
};

const Operations = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">العمليات المقترحة</h1>
            <p className="text-sm text-muted-foreground">إدارة ومتابعة العمليات الاستثمارية المقترحة</p>
          </div>
          <Button onClick={() => navigate("/operations/add")} className="gap-2">
            <Plus className="h-4 w-4" />
            إضافة عملية
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="بحث في العمليات..." className="pr-9" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">#</TableHead>
                  <TableHead className="text-right">اسم العملية</TableHead>
                  <TableHead className="text-right">الإدارة</TableHead>
                  <TableHead className="text-right">القيمة التقديرية (ج.م)</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">التاريخ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOperations.map((op) => (
                  <TableRow key={op.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>{op.id}</TableCell>
                    <TableCell className="font-medium">{op.name}</TableCell>
                    <TableCell>{op.department}</TableCell>
                    <TableCell>{op.budget}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusColor[op.status]}>
                        {op.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{op.date}</TableCell>
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

export default Operations;

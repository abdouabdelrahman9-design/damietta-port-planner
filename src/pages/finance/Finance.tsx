import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const invoices = [
  { id: 1, number: "INV-2026-001", operation: "تطوير رصيف 3", contractor: "المقاولون العرب", amount: "15,000,000", date: "2026-02-15", status: "مدفوع" },
  { id: 2, number: "INV-2026-002", operation: "توسعة ساحة التخزين", contractor: "شركة الإنشاءات", amount: "8,500,000", date: "2026-03-01", status: "معلق" },
  { id: 3, number: "INV-2026-003", operation: "تطوير رصيف 3", contractor: "المقاولون العرب", amount: "22,000,000", date: "2026-03-10", status: "قيد المراجعة" },
];

const statusColor: Record<string, string> = {
  "مدفوع": "bg-success/10 text-success border-success/20",
  "معلق": "bg-warning/10 text-warning border-warning/20",
  "قيد المراجعة": "bg-info/10 text-info border-info/20",
};

const Finance = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">الإدارة المالية</h1>
            <p className="text-sm text-muted-foreground">إدارة المستخلصات والمدفوعات</p>
          </div>
          <Button onClick={() => navigate("/finance/add-invoice")} className="gap-2">
            <Plus className="h-4 w-4" />
            إضافة مستخلص
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">إجمالي المدفوعات</p>
              <p className="text-3xl font-bold text-success mt-1">15 م.ج</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">معلق</p>
              <p className="text-3xl font-bold text-warning mt-1">8.5 م.ج</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">قيد المراجعة</p>
              <p className="text-3xl font-bold text-info mt-1">22 م.ج</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>المستخلصات</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">رقم المستخلص</TableHead>
                  <TableHead className="text-right">العملية</TableHead>
                  <TableHead className="text-right">المقاول</TableHead>
                  <TableHead className="text-right">المبلغ (ج.م)</TableHead>
                  <TableHead className="text-right">التاريخ</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium">{inv.number}</TableCell>
                    <TableCell>{inv.operation}</TableCell>
                    <TableCell>{inv.contractor}</TableCell>
                    <TableCell>{inv.amount}</TableCell>
                    <TableCell>{inv.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusColor[inv.status]}>{inv.status}</Badge>
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

export default Finance;

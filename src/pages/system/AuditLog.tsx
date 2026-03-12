import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const logs = [
  { id: 1, user: "أحمد محمد", action: "إضافة عملية", target: "تطوير رصيف 3", date: "2026-03-12 10:30", type: "إضافة" },
  { id: 2, user: "محمد علي", action: "اعتماد خطة", target: "الخطة الاستثمارية 2026", date: "2026-03-11 14:00", type: "اعتماد" },
  { id: 3, user: "فاطمة حسن", action: "إضافة مستخلص", target: "INV-2026-003", date: "2026-03-10 09:15", type: "إضافة" },
  { id: 4, user: "أحمد محمد", action: "تعديل مستخدم", target: "خالد إبراهيم", date: "2026-03-09 16:45", type: "تعديل" },
  { id: 5, user: "محمد علي", action: "حذف عملية", target: "مشروع تجريبي", date: "2026-03-08 11:20", type: "حذف" },
];

const typeColor: Record<string, string> = {
  "إضافة": "bg-success/10 text-success border-success/20",
  "اعتماد": "bg-info/10 text-info border-info/20",
  "تعديل": "bg-warning/10 text-warning border-warning/20",
  "حذف": "bg-destructive/10 text-destructive border-destructive/20",
};

const AuditLog = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">سجل العمليات</h1>
          <p className="text-sm text-muted-foreground">تتبع جميع العمليات في النظام</p>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="relative max-w-sm">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="بحث في السجل..." className="pr-9" />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">المستخدم</TableHead>
                  <TableHead className="text-right">الإجراء</TableHead>
                  <TableHead className="text-right">العنصر</TableHead>
                  <TableHead className="text-right">النوع</TableHead>
                  <TableHead className="text-right">التاريخ والوقت</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.user}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.target}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={typeColor[log.type]}>{log.type}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{log.date}</TableCell>
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

export default AuditLog;

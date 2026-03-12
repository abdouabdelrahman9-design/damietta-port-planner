import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const contracts = [
  { id: 1, name: "عقد توريد رافعات", contractor: "شركة كريبس الدولية", value: "180,000,000", startDate: "2026-03-01", endDate: "2027-03-01", status: "ساري" },
  { id: 2, name: "عقد أعمال خرسانية", contractor: "شركة المقاولون العرب", value: "95,000,000", startDate: "2026-01-15", endDate: "2026-12-15", status: "ساري" },
  { id: 3, name: "عقد نظام ملاحة", contractor: "شركة سيمنز", value: "42,000,000", startDate: "2025-10-01", endDate: "2026-04-01", status: "منتهي" },
];

const Contracts = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">العقود</h1>
          <p className="text-sm text-muted-foreground">إدارة عقود المشاريع الاستثمارية</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>قائمة العقود</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">#</TableHead>
                  <TableHead className="text-right">اسم العقد</TableHead>
                  <TableHead className="text-right">المقاول</TableHead>
                  <TableHead className="text-right">قيمة العقد (ج.م)</TableHead>
                  <TableHead className="text-right">تاريخ البداية</TableHead>
                  <TableHead className="text-right">تاريخ النهاية</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contracts.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.id}</TableCell>
                    <TableCell className="font-medium">{c.name}</TableCell>
                    <TableCell>{c.contractor}</TableCell>
                    <TableCell>{c.value}</TableCell>
                    <TableCell>{c.startDate}</TableCell>
                    <TableCell>{c.endDate}</TableCell>
                    <TableCell>
                      <Badge variant={c.status === "ساري" ? "default" : "secondary"}>{c.status}</Badge>
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

export default Contracts;

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tenders = [
  { id: 1, name: "مناقصة توريد رافعات جسرية", operation: "تطوير رصيف 3", status: "مفتوحة", deadline: "2026-04-15", bidders: 5 },
  { id: 2, name: "مناقصة أعمال خرسانية", operation: "توسعة ساحة التخزين", status: "مغلقة", deadline: "2026-02-28", bidders: 8 },
  { id: 3, name: "مناقصة نظام ملاحة", operation: "تحديث الملاحة", status: "تم الترسية", deadline: "2026-01-30", bidders: 3 },
];

const tenderStatusColor: Record<string, string> = {
  "مفتوحة": "bg-info/10 text-info border-info/20",
  "مغلقة": "bg-warning/10 text-warning border-warning/20",
  "تم الترسية": "bg-success/10 text-success border-success/20",
};

const Procurement = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">إدارة المشتريات</h1>
          <p className="text-sm text-muted-foreground">إدارة المناقصات والترسية والعقود</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">مناقصات مفتوحة</p>
              <p className="text-3xl font-bold text-info mt-1">1</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">تم الترسية</p>
              <p className="text-3xl font-bold text-success mt-1">1</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">إجمالي المناقصات</p>
              <p className="text-3xl font-bold text-primary mt-1">3</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>المناقصات</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">#</TableHead>
                  <TableHead className="text-right">اسم المناقصة</TableHead>
                  <TableHead className="text-right">العملية</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">الموعد النهائي</TableHead>
                  <TableHead className="text-right">عدد المتقدمين</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tenders.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell>{t.id}</TableCell>
                    <TableCell className="font-medium">{t.name}</TableCell>
                    <TableCell>{t.operation}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={tenderStatusColor[t.status]}>{t.status}</Badge>
                    </TableCell>
                    <TableCell>{t.deadline}</TableCell>
                    <TableCell>{t.bidders}</TableCell>
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

export default Procurement;

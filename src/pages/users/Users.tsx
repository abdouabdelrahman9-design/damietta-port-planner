import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

const mockUsers = [
  { id: 1, name: "أحمد محمد", email: "ahmed@damietta-port.gov.eg", role: "مدير النظام", department: "تكنولوجيا المعلومات", status: "نشط" },
  { id: 2, name: "محمد علي", email: "mohamed@damietta-port.gov.eg", role: "مدير إدارة", department: "إدارة الأرصفة", status: "نشط" },
  { id: 3, name: "فاطمة حسن", email: "fatma@damietta-port.gov.eg", role: "مستخدم عادي", department: "إدارة المالية", status: "نشط" },
  { id: 4, name: "خالد إبراهيم", email: "khaled@damietta-port.gov.eg", role: "مستخدم عادي", department: "إدارة المشتريات", status: "معطل" },
];

const Users = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">إدارة المستخدمين</h1>
            <p className="text-sm text-muted-foreground">إضافة وتعديل وحذف المستخدمين</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            إضافة مستخدم
          </Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الاسم</TableHead>
                  <TableHead className="text-right">البريد الإلكتروني</TableHead>
                  <TableHead className="text-right">الدور</TableHead>
                  <TableHead className="text-right">الإدارة</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">إجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "نشط" ? "default" : "secondary"}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0"><Edit className="h-4 w-4" /></Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive" onClick={() => toast.error("تم حذف المستخدم")}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

export default Users;

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const roles = [
  { id: 1, name: "مدير النظام", users: 1, permissions: ["عرض الكل", "تعديل الكل", "حذف", "إدارة المستخدمين", "إعدادات النظام"] },
  { id: 2, name: "مدير إدارة", users: 3, permissions: ["عرض الكل", "تعديل العمليات", "اعتماد الخطة", "متابعة التنفيذ"] },
  { id: 3, name: "مستخدم عادي", users: 8, permissions: ["عرض العمليات", "إضافة عملية", "رفع مستندات"] },
];

const allPermissions = [
  "عرض الكل", "عرض العمليات", "تعديل الكل", "تعديل العمليات",
  "حذف", "إدارة المستخدمين", "إعدادات النظام", "اعتماد الخطة",
  "متابعة التنفيذ", "إضافة عملية", "رفع مستندات", "التقارير",
];

const Roles = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">إدارة الصلاحيات</h1>
          <p className="text-sm text-muted-foreground">تعيين وتعديل صلاحيات الأدوار</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card key={role.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{role.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{role.users} مستخدم</p>
                <div className="space-y-2">
                  {allPermissions.map((perm) => (
                    <div key={perm} className="flex items-center gap-2">
                      <Checkbox
                        id={`${role.id}-${perm}`}
                        defaultChecked={role.permissions.includes(perm)}
                      />
                      <label htmlFor={`${role.id}-${perm}`} className="text-sm">{perm}</label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Roles;

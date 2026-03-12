import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const SystemSettings = () => {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold">إعدادات النظام</h1>
          <p className="text-sm text-muted-foreground">إعدادات عامة للنظام</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>معلومات الجهة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>اسم الجهة</Label>
              <Input defaultValue="هيئة ميناء دمياط" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <Input defaultValue="info@damietta-port.gov.eg" />
              </div>
              <div className="space-y-2">
                <Label>رقم الهاتف</Label>
                <Input defaultValue="+20 57 2903000" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إعدادات الإشعارات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">إشعارات البريد الإلكتروني</p>
                <p className="text-xs text-muted-foreground">إرسال إشعارات عند تحديث العمليات</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">إشعارات اعتماد الخطة</p>
                <p className="text-xs text-muted-foreground">إرسال إشعار عند اعتماد أو رفض عملية</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">تقارير دورية</p>
                <p className="text-xs text-muted-foreground">إرسال تقرير أسبوعي بالبريد الإلكتروني</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إعدادات النظام</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>السنة المالية الحالية</Label>
                <Input defaultValue="2026" />
              </div>
              <div className="space-y-2">
                <Label>عملة النظام</Label>
                <Input defaultValue="جنيه مصري (ج.م)" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button onClick={() => toast.success("تم حفظ الإعدادات بنجاح")}>
          حفظ الإعدادات
        </Button>
      </div>
    </AppLayout>
  );
};

export default SystemSettings;

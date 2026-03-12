import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddOperation = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إضافة العملية بنجاح");
    navigate("/operations");
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold">إضافة عملية استثمارية</h1>
          <p className="text-sm text-muted-foreground">إنشاء عملية استثمارية جديدة</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>بيانات العملية</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>اسم العملية</Label>
                <Input placeholder="أدخل اسم العملية الاستثمارية" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>الإدارة المسؤولة</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الإدارة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="docks">إدارة الأرصفة</SelectItem>
                      <SelectItem value="silos">إدارة الصوامع</SelectItem>
                      <SelectItem value="nav">إدارة الملاحة</SelectItem>
                      <SelectItem value="warehouse">إدارة المستودعات</SelectItem>
                      <SelectItem value="it">إدارة تكنولوجيا المعلومات</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>القيمة التقديرية (ج.م)</Label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>مدة التنفيذ (بالأشهر)</Label>
                  <Input type="number" placeholder="12" />
                </div>
                <div className="space-y-2">
                  <Label>الأولوية</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الأولوية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">عالية</SelectItem>
                      <SelectItem value="medium">متوسطة</SelectItem>
                      <SelectItem value="low">منخفضة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>وصف العملية</Label>
                <Textarea placeholder="أدخل وصف تفصيلي للعملية..." rows={4} />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit">حفظ العملية</Button>
                <Button type="button" variant="outline" onClick={() => navigate("/operations")}>
                  إلغاء
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AddOperation;

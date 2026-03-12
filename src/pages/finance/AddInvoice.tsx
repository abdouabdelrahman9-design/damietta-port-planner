import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddInvoice = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إضافة المستخلص بنجاح");
    navigate("/finance");
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold">إضافة مستخلص</h1>
          <p className="text-sm text-muted-foreground">إنشاء مستخلص مالي جديد</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>بيانات المستخلص</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>رقم المستخلص</Label>
                  <Input placeholder="INV-2026-004" />
                </div>
                <div className="space-y-2">
                  <Label>العملية الاستثمارية</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="اختر العملية" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">تطوير رصيف الحاويات رقم 3</SelectItem>
                      <SelectItem value="2">توسعة ساحة التخزين</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>المبلغ (ج.م)</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label>التاريخ</Label>
                  <Input type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>المقاول</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="اختر المقاول" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">شركة المقاولون العرب</SelectItem>
                    <SelectItem value="2">شركة كريبس الدولية</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>المرفقات</Label>
                <Input type="file" />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit">حفظ المستخلص</Button>
                <Button type="button" variant="outline" onClick={() => navigate("/finance")}>إلغاء</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AddInvoice;

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ProjectStudy = () => {
  const handleSave = () => {
    toast.success("تم حفظ الدراسة بنجاح");
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-2xl font-bold">دراسة المشروع</h1>
          <p className="text-sm text-muted-foreground">إعداد دراسة جدوى وتحليل فني للمشروع</p>
        </div>

        <Tabs defaultValue="idea" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="idea">فكرة المشروع</TabsTrigger>
            <TabsTrigger value="justification">المبررات</TabsTrigger>
            <TabsTrigger value="technical">الوصف الفني</TabsTrigger>
            <TabsTrigger value="analysis">التحليل المالي</TabsTrigger>
          </TabsList>

          <TabsContent value="idea">
            <Card>
              <CardHeader><CardTitle>فكرة المشروع</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>عنوان المشروع</Label>
                  <Input placeholder="أدخل عنوان المشروع" />
                </div>
                <div className="space-y-2">
                  <Label>فكرة المشروع</Label>
                  <Textarea placeholder="وصف فكرة المشروع بالتفصيل..." rows={5} />
                </div>
                <div className="space-y-2">
                  <Label>الأهداف المتوقعة</Label>
                  <Textarea placeholder="حدد الأهداف الرئيسية..." rows={3} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="justification">
            <Card>
              <CardHeader><CardTitle>مبررات المشروع</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>المبررات الاقتصادية</Label>
                  <Textarea placeholder="المبررات الاقتصادية للمشروع..." rows={4} />
                </div>
                <div className="space-y-2">
                  <Label>المبررات الفنية</Label>
                  <Textarea placeholder="المبررات الفنية..." rows={4} />
                </div>
                <div className="space-y-2">
                  <Label>المبررات الاستراتيجية</Label>
                  <Textarea placeholder="المبررات الاستراتيجية..." rows={4} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical">
            <Card>
              <CardHeader><CardTitle>الوصف الفني</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>المواصفات الفنية</Label>
                  <Textarea placeholder="المواصفات الفنية التفصيلية..." rows={5} />
                </div>
                <div className="space-y-2">
                  <Label>المتطلبات التقنية</Label>
                  <Textarea placeholder="المتطلبات التقنية اللازمة..." rows={4} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardHeader><CardTitle>التحليل المالي</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>التكلفة التقديرية (ج.م)</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label>العائد المتوقع (ج.م)</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>فترة الاسترداد (سنوات)</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label>ملاحظات مالية</Label>
                  <Textarea placeholder="ملاحظات إضافية..." rows={3} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3">
          <Button onClick={handleSave}>حفظ الدراسة</Button>
          <Button variant="outline">إرسال للاعتماد</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectStudy;

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X, Edit } from "lucide-react";
import { toast } from "sonner";

const pendingPlans = [
  { id: 1, name: "تطوير رصيف الحاويات رقم 3", department: "إدارة الأرصفة", budget: "450,000,000", priority: "عالية" },
  { id: 2, name: "إنشاء صوامع غلال جديدة", department: "إدارة الصوامع", budget: "320,000,000", priority: "عالية" },
  { id: 3, name: "تركيب رافعات جسرية", department: "إدارة الأرصفة", budget: "180,000,000", priority: "متوسطة" },
  { id: 4, name: "بناء بوابة ذكية للميناء", department: "إدارة تكنولوجيا المعلومات", budget: "50,000,000", priority: "متوسطة" },
];

const PlanApproval = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">اعتماد الخطة الاستثمارية</h1>
          <p className="text-sm text-muted-foreground">مراجعة واعتماد العمليات المقترحة</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>العمليات المعلقة للاعتماد</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">#</TableHead>
                  <TableHead className="text-right">اسم العملية</TableHead>
                  <TableHead className="text-right">الإدارة</TableHead>
                  <TableHead className="text-right">الميزانية (ج.م)</TableHead>
                  <TableHead className="text-right">الأولوية</TableHead>
                  <TableHead className="text-right">إجراء</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell>{plan.id}</TableCell>
                    <TableCell className="font-medium">{plan.name}</TableCell>
                    <TableCell>{plan.department}</TableCell>
                    <TableCell>{plan.budget}</TableCell>
                    <TableCell>
                      <Badge variant={plan.priority === "عالية" ? "destructive" : "secondary"}>
                        {plan.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="text-success h-8 w-8 p-0" onClick={() => toast.success("تم اعتماد العملية")}>
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive h-8 w-8 p-0" onClick={() => toast.error("تم رفض العملية")}>
                          <X className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => toast.info("تعديل الميزانية")}>
                          <Edit className="h-4 w-4" />
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

export default PlanApproval;

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const projects = [
  {
    id: 1, name: "تطوير رصيف الحاويات رقم 3", progress: 45,
    achievements: ["إتمام الحفر والتأسيس", "تركيب 60% من القوائم الخرسانية"],
    obstacles: ["تأخر توريد المعدات من الخارج"],
    milestones: [
      { name: "التأسيس", status: "مكتمل" },
      { name: "الهيكل الخرساني", status: "جاري" },
      { name: "التشطيبات", status: "لم يبدأ" },
    ],
  },
  {
    id: 2, name: "توسعة ساحة التخزين", progress: 72,
    achievements: ["تسوية الأرض بالكامل", "رصف 70% من المساحة"],
    obstacles: [],
    milestones: [
      { name: "التسوية", status: "مكتمل" },
      { name: "الرصف", status: "جاري" },
      { name: "التسليم", status: "لم يبدأ" },
    ],
  },
];

const ExecutionTracking = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">متابعة التنفيذ</h1>
          <p className="text-sm text-muted-foreground">متابعة نسبة الإنجاز والمعوقات لكل مشروع</p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge variant={project.progress >= 70 ? "default" : "secondary"}>
                    {project.progress}%
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-3 mt-2" />
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="achievements">
                  <TabsList>
                    <TabsTrigger value="achievements" className="gap-1">
                      <CheckCircle2 className="h-3 w-3" /> الإنجازات
                    </TabsTrigger>
                    <TabsTrigger value="obstacles" className="gap-1">
                      <AlertTriangle className="h-3 w-3" /> المعوقات
                    </TabsTrigger>
                    <TabsTrigger value="milestones" className="gap-1">
                      <Clock className="h-3 w-3" /> المراحل
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="achievements">
                    <ul className="space-y-2 mt-3">
                      {project.achievements.map((a, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="obstacles">
                    {project.obstacles.length > 0 ? (
                      <ul className="space-y-2 mt-3">
                        {project.obstacles.map((o, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-3">لا توجد معوقات حالياً</p>
                    )}
                  </TabsContent>
                  <TabsContent value="milestones">
                    <div className="space-y-2 mt-3">
                      {project.milestones.map((m, i) => (
                        <div key={i} className="flex items-center justify-between text-sm p-2 rounded bg-muted/50">
                          <span>{m.name}</span>
                          <Badge variant={m.status === "مكتمل" ? "default" : m.status === "جاري" ? "secondary" : "outline"}>
                            {m.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ExecutionTracking;

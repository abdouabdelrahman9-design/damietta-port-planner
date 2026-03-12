import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const projectLocations = [
  { id: 1, name: "تطوير رصيف الحاويات رقم 3", lat: 31.4680, lng: 31.7520, status: "جاري التنفيذ", progress: 45 },
  { id: 2, name: "إنشاء صوامع غلال جديدة", lat: 31.4650, lng: 31.7480, status: "جاري التنفيذ", progress: 15 },
  { id: 3, name: "توسعة ساحة التخزين", lat: 31.4670, lng: 31.7550, status: "جاري التنفيذ", progress: 72 },
  { id: 4, name: "بناء بوابة ذكية", lat: 31.4640, lng: 31.7460, status: "مكتمل", progress: 100 },
  { id: 5, name: "تحديث نظام الملاحة", lat: 31.4690, lng: 31.7510, status: "متأخر", progress: 20 },
];

const statusColors: Record<string, string> = {
  "جاري التنفيذ": "#1a5fb4",
  "مكتمل": "#26a269",
  "متأخر": "#c01c28",
};

const GISMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [activeLayer, setActiveLayer] = useState<string>("all");

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current).setView([31.4666, 31.7500], 14);
    mapInstance.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Port boundary (approximate)
    const portBoundary = L.polygon([
      [31.4620, 31.7430],
      [31.4620, 31.7580],
      [31.4710, 31.7580],
      [31.4710, 31.7430],
    ], {
      color: "#1a5fb4",
      weight: 2,
      fillOpacity: 0.05,
      dashArray: "10 5",
    }).addTo(map);
    portBoundary.bindPopup("<strong>حدود ميناء دمياط</strong>");

    // Project markers
    projectLocations.forEach((project) => {
      const color = statusColors[project.status] || "#1a5fb4";
      const marker = L.circleMarker([project.lat, project.lng], {
        radius: 10,
        fillColor: color,
        color: color,
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7,
      }).addTo(map);

      marker.bindPopup(`
        <div style="direction:rtl;text-align:right;font-family:Cairo,sans-serif;min-width:180px">
          <strong>${project.name}</strong><br/>
          <span>الحالة: ${project.status}</span><br/>
          <span>نسبة الإنجاز: ${project.progress}%</span>
          <div style="background:#e0e0e0;border-radius:4px;height:8px;margin-top:6px">
            <div style="background:${color};height:8px;border-radius:4px;width:${project.progress}%"></div>
          </div>
        </div>
      `);
    });

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">خريطة المشاريع - GIS</h1>
          <p className="text-sm text-muted-foreground">خريطة تفاعلية لمشاريع ميناء دمياط الاستثمارية</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <div ref={mapRef} className="h-[500px] w-full" />
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">دليل الألوان</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(statusColors).map(([status, color]) => (
                  <div key={status} className="flex items-center gap-2 text-sm">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                    <span>{status}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">المشاريع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {projectLocations.map((p) => (
                  <div key={p.id} className="text-xs p-2 rounded bg-muted/50 space-y-1">
                    <p className="font-medium">{p.name}</p>
                    <div className="flex justify-between text-muted-foreground">
                      <span>{p.status}</span>
                      <span>{p.progress}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GISMap;

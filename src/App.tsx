import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Operations from "./pages/operations/Operations";
import AddOperation from "./pages/operations/AddOperation";
import ProjectStudy from "./pages/operations/ProjectStudy";
import PlanApproval from "./pages/operations/PlanApproval";
import InvestmentPlan from "./pages/operations/InvestmentPlan";
import ExecutionTracking from "./pages/execution/ExecutionTracking";
import Procurement from "./pages/procurement/Procurement";
import Contracts from "./pages/procurement/Contracts";
import Finance from "./pages/finance/Finance";
import AddInvoice from "./pages/finance/AddInvoice";
import GISMap from "./pages/gis/GISMap";
import ExecutionReports from "./pages/reports/ExecutionReports";
import BudgetReports from "./pages/reports/BudgetReports";
import DepartmentReports from "./pages/reports/DepartmentReports";
import Users from "./pages/users/Users";
import Roles from "./pages/users/Roles";
import AuditLog from "./pages/system/AuditLog";
import SystemSettings from "./pages/system/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/operations/add" element={<AddOperation />} />
          <Route path="/project-study" element={<ProjectStudy />} />
          <Route path="/plan-approval" element={<PlanApproval />} />
          <Route path="/investment-plan" element={<InvestmentPlan />} />
          <Route path="/execution" element={<ExecutionTracking />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/finance/add-invoice" element={<AddInvoice />} />
          <Route path="/gis" element={<GISMap />} />
          <Route path="/reports/execution" element={<ExecutionReports />} />
          <Route path="/reports/budget" element={<BudgetReports />} />
          <Route path="/reports/departments" element={<DepartmentReports />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/audit-log" element={<AuditLog />} />
          <Route path="/settings" element={<SystemSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

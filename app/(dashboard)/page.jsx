import { DataCharts } from "@/components/DataCharts";
import { DataGrid } from "@/components/DataGrid";
import { InsightsGrid } from "@/components/InsightsGrid";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const DashboardPage = () => {
  return (
    <Suspense
      fallback={
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24 flex justify-center items-center h-125">
          <Loader2 className="size-8 text-blue-500 animate-spin" />
        </div>
      }
    >
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <DataGrid />
        <InsightsGrid />
        <DataCharts />
      </div>
    </Suspense>
  );
};

export default DashboardPage;

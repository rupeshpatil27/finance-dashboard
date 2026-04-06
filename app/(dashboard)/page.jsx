import { DataCharts } from "@/components/DataCharts";
import { DataGrid } from "@/components/DataGrid";
import { InsightsGrid } from "@/components/InsightsGrid";

const DashboardPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <DataGrid />
      <InsightsGrid/>
      <DataCharts />
    </div>
  );
};

export default DashboardPage;

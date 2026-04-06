"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, TrendingDown, Target } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { formatCurrency } from "@/lib/utils";

export const InsightsGrid = () => {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (!data) return null;

  const highestCategory =
    data.categories?.length > 0
      ? data.categories.reduce((prev, current) =>
          prev.value > current.value ? prev : current,
        )
      : null;

  const savingsRate =
    data.incomeAmount > 0
      ? ((data.remainingAmount / data.incomeAmount) * 100).toFixed(1)
      : 0;

  const isOverspending = data.expensesAmount > data.incomeAmount;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      <Card className="border-none drop-shadow-sm bg-blue-50/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-blue-700">
            Highest Spending Area
          </CardTitle>
          <Target className="size-4 text-blue-700" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800">
            {highestCategory ? highestCategory.name : "N/A"}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {highestCategory
              ? `Costing you ${formatCurrency(highestCategory.value)} this period.`
              : "Not enough data."}
          </p>
        </CardContent>
      </Card>

      <Card className="border-none drop-shadow-sm bg-emerald-50/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-emerald-700">
            Savings Rate
          </CardTitle>
          <Lightbulb className="size-4 text-emerald-700" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800">
            {savingsRate}%
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Of your total income was saved or remains unspent.
          </p>
        </CardContent>
      </Card>

      <Card
        className={`border-none drop-shadow-sm ${isOverspending ? "bg-rose-50/50" : "bg-slate-50/50"}`}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle
            className={`text-sm font-medium ${isOverspending ? "text-rose-700" : "text-slate-700"}`}
          >
            Cash Flow Status
          </CardTitle>
          <TrendingDown
            className={`size-4 ${isOverspending ? "text-rose-700" : "text-slate-700"}`}
          />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold text-slate-800 leading-tight mt-1">
            {isOverspending
              ? "You are currently spending more than you are earning."
              : "Your cash flow is positive. Keep it up!"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import { Skeleton } from "@/components/ui/skeleton"

export default function ProfessionalsLoading() {
  return (
    <div className="container py-10">
      <div className="flex justify-start mb-6">
        <Skeleton className="h-10 w-32" />
      </div>

      <Skeleton className="h-10 w-64 mb-6" />

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-10 w-[100px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
          ))}
      </div>
    </div>
  )
}

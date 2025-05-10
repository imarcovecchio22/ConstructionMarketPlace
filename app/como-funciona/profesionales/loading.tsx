import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-10">
      <Skeleton className="h-4 w-[150px] mb-6" />
      <Skeleton className="h-10 w-[300px] mb-2" />
      <Skeleton className="h-5 w-[500px] mb-8" />

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Skeleton className="h-10 flex-1" />
        <div className="flex gap-2 flex-col sm:flex-row">
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-10 w-[200px]" />
        </div>
      </div>

      <Skeleton className="h-10 w-[250px] mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg border">
            <Skeleton className="aspect-square w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-6 w-[70%]" />
              <Skeleton className="h-4 w-[90%]" />
              <div className="flex gap-1">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-4 w-[80%]" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-[40%]" />
                <Skeleton className="h-4 w-[40%]" />
              </div>
              <Skeleton className="h-4 w-[60%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <Skeleton className="h-12 w-[500px]" />
        <Skeleton className="h-6 w-[700px]" />
      </div>

      <Skeleton className="h-12 w-full mb-8" />

      <div className="space-y-12">
        <section>
          <Skeleton className="h-10 w-[400px] mb-6" />
          <Skeleton className="h-6 w-full mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-12 w-12 rounded-full mb-4" />
                <Skeleton className="h-6 w-[150px] mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <Skeleton className="h-10 w-[300px] mb-6" />
          <Skeleton className="h-6 w-full mb-8" />

          <div className="border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Skeleton className="h-6 w-[200px] mb-4" />
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start mb-4">
                    <Skeleton className="h-6 w-6 mr-4 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-[150px] mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
              <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
          </div>

          <div className="flex justify-center">
            <Skeleton className="h-10 w-[200px]" />
          </div>
        </section>
      </div>
    </div>
  )
}

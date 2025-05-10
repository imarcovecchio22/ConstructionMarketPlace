import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-10">
      <Skeleton className="h-10 w-[300px] mb-6" />

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-[200px]" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm bg-muted">
          <div className="col-span-3">Nombre y Profesión</div>
          <div className="col-span-2">Especialidad</div>
          <div className="col-span-2">Calificación</div>
          <div className="col-span-2">Trabajos Completados</div>
          <div className="col-span-2">Ubicación</div>
          <div className="col-span-1">Acción</div>
        </div>

        <div className="divide-y">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-3">
                <Skeleton className="h-5 w-[150px] mb-2" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="col-span-2">
                <Skeleton className="h-6 w-[100px]" />
              </div>
              <div className="col-span-2">
                <Skeleton className="h-5 w-[80px]" />
              </div>
              <div className="col-span-2">
                <Skeleton className="h-5 w-[100px]" />
              </div>
              <div className="col-span-2">
                <Skeleton className="h-5 w-[120px]" />
              </div>
              <div className="col-span-1">
                <Skeleton className="h-9 w-[70px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

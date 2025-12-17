import { Card } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProjectCardSkeleton() {
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full rounded-3xl shadow-md overflow-hidden">

        {/* Image Skeleton */}
        <div className="relative aspect-4/3">
          <Skeleton height="100%" />

          {/* Featured Badge */}
          <div className="absolute top-3 left-3">
            <Skeleton width={80} height={24} borderRadius={20} />
          </div>

          {/* Heart Icon */}
          <div className="absolute top-3 right-3">
            <Skeleton width={40} height={40} borderRadius="50%" />
          </div>
        </div>

        {/* Body Skeleton */}
        <div className="p-4 space-y-3">
          <Skeleton width="70%" height={20} />
          <Skeleton width="50%" height={16} />
          <Skeleton width="40%" height={16} />
          <Skeleton width="30%" height={20} />
        </div>

      </Card>
    </div>
  );
}

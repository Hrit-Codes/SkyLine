import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { type projectCardData } from "@/interfaces/project";

import totalFloorArea from "../assets/images/total_floor_area.png";
import landArea from "../assets/images/land_area.png";
import bedrooms from "../assets/images/bedroom_icon.png";
import bathrooms from "../assets/images/bathrooms.png";
import furnished from "../assets/images/funished.png";
import totalRooms from "../assets/images/total_rooms.png";

interface Props {
  item: projectCardData;
}

export default function ProjectCard({ item }: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="w-full rounded-3xl shadow-md overflow-hidden bg-white flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.projectName}
          className="w-full h-80 object-cover"
        />

        <Badge className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-full shadow">
          Featured
        </Badge>

        <button
          className="absolute top-3 right-3 bg-white size-10 rounded-full flex items-center justify-center shadow"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={`w-5 h-5 ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-400 fill-transparent"
            }`}
          />
        </button>
      </div>

      <CardContent className="px-5 py-4 flex flex-col gap-3">
        {/* Common Header */}
        <h3 className="text-lg font-semibold text-gray-900">
          {item.projectName}
        </h3>

        <p className="text-gray-500 text-sm">
          {item.street}, {item.city}
        </p>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-3">
            {/* Price */}
            <p className="text-orange-500 font-semibold text-lg">
              {item.propertyType === "Apartment"
                ? `$${item.price} / Month`
                : `$${item.price}`}
            </p>

            {/* Residential */}
            {item.propertyType === "Residential" && (
              <div className="flex gap-4 text-sm">
                <Feature icon={bedrooms} value={item.totalBedrooms} />
                <Feature icon={bathrooms} value={item.totalBathrooms} />
                <Feature icon={landArea} value={item.landArea} />
              </div>
            )}

            {/* Apartment */}
            {item.propertyType === "Apartment" && (
              <div className="flex gap-4 text-sm">
                <Feature icon={totalRooms} value={item.totalRooms} />
                <Feature icon={bathrooms} value={item.totalBathrooms} />
                <Feature
                  icon={furnished}
                  value={item.furnished ? "Yes" : "No"}
                />
              </div>
            )}

            {/* Commercial */}
            {item.propertyType === "Commercial" && (
              <div className="flex items-center gap-1 text-sm">
                <Avatar>
                  <AvatarImage src={totalFloorArea} className="w-5 h-5" />
                </Avatar>
                {item.totalFloorArea}
              </div>
            )}
          </div>

          {/* Button */}
          <button
            onClick={() => navigate(`/full-detail/${item._id}`)}
            className="relative text-primary font-medium group hover:cursor-pointer"
          >
            Learn More
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary transition-all duration-300 group-hover:w-0" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function Feature({ icon, value }: { icon: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      <Avatar>
        <AvatarImage src={icon} className="w-5 h-5" />
      </Avatar>
      {value}
    </div>
  );
}

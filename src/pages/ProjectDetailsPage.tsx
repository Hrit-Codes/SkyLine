import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFullProjectDetail } from "@/services/projectServices";
import { type Property } from "@/interfaces/project";



export default function ProjectDetailsPage() {
    const navigate = useNavigate();
    const { projectId } = useParams<{ projectId: string }>();

    const [option, setOption] = useState<"Features" | "Description">("Features");
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    console.log("Project Id is::",projectId);
    useEffect(() => {
        const fetchProjectDetails = async () => {
            if (!projectId) {
                console.log("No project id error");
                navigate("/");
                return;
            }

            try {
                setLoading(true);
                const response = await getFullProjectDetail(projectId);
                setProperty(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching project detail", error);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [projectId, navigate]);


    const getFeatures = (): string[] => {
    if (!property) return [];

    const extraFeatures: string[] = [];

    if (property.propertyType === "Residential") {
        if (property.totalBedrooms)
            extraFeatures.push(`Total bedrooms: ${property.totalBedrooms}`);

        if (property.totalBathrooms)
            extraFeatures.push(`Total bathrooms: ${property.totalBathrooms}`);

        if (property.landArea)
            extraFeatures.push(`Total land area: ${property.landArea}`);
    }

    if (property.propertyType === "Apartment") {
        if (property.totalRooms)
            extraFeatures.push(`Total rooms: ${property.totalRooms}`);

        if (property.totalBathrooms)
            extraFeatures.push(`Total bathrooms: ${property.totalBathrooms}`);

        if (property.furnished)
            extraFeatures.push("Fully Furnished");
    }

    if (property.propertyType === "Commercial") {
        if (property.totalFloorArea)
            extraFeatures.push(`Total floor area: ${property.totalFloorArea}`);
    }

    return [...property.features, ...extraFeatures];
    };



    const renderContent = () => {
        if (!property) return null;

        switch (option) {
            case "Features":
                return (
                    <ul className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {getFeatures().map((feature, index) => (
                            <li key={index} className="flex gap-2">
                                <div className="rounded-full bg-primary p-1 h-fit">
                                    <Check className="text-white w-4 h-4" />
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                );

            case "Description":
                return (
                    <p className="text-justify whitespace-pre-line">
                        {property.description}
                    </p>
                );
        }
    };


    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!property) {
        return <div className="text-center py-10">No Project Found</div>;
    }


    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-9/10 flex flex-col items-center my-8">

                <div className="w-full min-h-[40vw] max-h-[600px] rounded-lg shadow-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${property.image})` }}>
                </div>

                <div className="w-full flex flex-col gap-4 py-4">
                    <h1 className="text-2xl font-semibold">
                        {property.projectName}
                    </h1>

                    <span className="text-primary">
                        {property.street}, {property.city}
                    </span>

                    <span className="text-orange-400">
                    {property.propertyType === "Commercial"
                        ? property.rentPerMonth
                            ? `$${property.rentPerMonth.toLocaleString()} / Month`
                            : "Rent not available"
                        : property.price
                            ? `$${property.price.toLocaleString()}`
                            : "Price not available"}
                    </span>


                    <div className="flex gap-2 my-4">
                        <Button
                            variant={option === "Features" ? "default" : "outline"}
                            onClick={() => setOption("Features")}
                        >
                            Features
                        </Button>

                        <Button
                            variant={option === "Description" ? "default" : "outline"}
                            onClick={() => setOption("Description")}
                        >
                            Description
                        </Button>
                    </div>

                    <div className="border-2 p-4 rounded-lg">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

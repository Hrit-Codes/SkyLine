import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import { useForm} from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerInquiry } from "@/services/projectServices";
import { type inquiry } from "@/interfaces/project";
import type { AxiosError } from "axios";


export default function ContactSection() {
    const { register, handleSubmit, reset, formState:{ errors } } = useForm<inquiry>();

    const mutation = useMutation<unknown, AxiosError<{message:string}>, inquiry>({
        mutationFn: (inquiryData) => registerInquiry(inquiryData),

        onSuccess: () => {
            toast.success("Inquiry registered successfully", { duration: 3000 });
            reset();
        },

        onError: (error) => {
            const errorMessage = error.response?.data?.message || "Failed to register inquiry";
            toast.error("Failed to register inquiry", {
                description: errorMessage,
                duration: 5000,
            });
        },
    });

    const onSubmit = (data:inquiry) => {
        mutation.mutate(data);
        console.log("Inquiry data:", data);
    };

    return (
        <div className="bg-card rounded-3xl shadow-primary shadow-lg p-4 md:p-6">
            <Toaster position="top-right" richColors theme="light"/>
            <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">We'd love to hear from you!</h1>
                <h2 className="text-xl md:text-2xl text-gray-600">Let's get in touch</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-8">
                {/* Full Name */}
                <div className="md:col-span-1">
                    <label htmlFor="fullname" className="block mb-2">
                        <span className="font-medium">Full Name</span>
                        <Input
                            type="text"
                            id="fullname"
                            className="mt-1"
                            {...register("fullname", { required: "Full Name is required" })}
                        />
                    </label>
                    {errors.fullname && <p className="text-red-400 text-sm mt-1">{errors.fullname?.message}</p>}
                </div>

                {/* Email */}
                <div className="md:col-span-1">
                    <label htmlFor="email" className="block mb-2">
                        <span className="font-medium">Email</span>
                        <Input
                            type="email"
                            id="email"
                            className="mt-1"
                            {...register("email", { required: "Email is required" })}
                        />
                    </label>
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>}
                </div>

                {/* Phone Number - Now on same row as Address on tablet/desktop */}
                <div className="md:col-span-1">
                    <label htmlFor="phoneno" className="block mb-2">
                        <span className="font-medium">Phone Number</span>
                        <Input
                            type="text"
                            id="phoneno"
                            className="mt-1"
                            {...register("phoneno", { required: "Phone number is required" })}
                        />
                    </label>
                    {errors.phoneno && <p className="text-red-400 text-sm mt-1">{errors.phoneno?.message}</p>}
                </div>

                {/* Address - Now on same row as Phone on tablet/desktop */}
                <div className="md:col-span-1">
                    <label htmlFor="address" className="block mb-2">
                        <span className="font-medium">Address</span>
                        <Input
                            type="text"
                            id="address"
                            className="mt-1"
                            {...register("address", { required: "Address is required" })}
                        />
                    </label>
                    {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address?.message}</p>}
                </div>

                {/* Message - Full width */}
                <div className="col-span-1 md:col-span-2">
                    <label htmlFor="message" className="block mb-2">
                        <span className="font-medium">Text Message</span>
                        <Textarea
                            id="message"
                            placeholder="Type your message here."
                            className="mt-1 min-h-[120px] md:min-h-[140px]"
                            {...register("message", { required: "Message is required" })}
                        />
                    </label>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message?.message}</p>}
                </div>

                <Button 
                    type="submit" 
                    variant="default" 
                    className="col-span-1 md:col-span-2 w-full py-6 text-base md:text-lg font-medium"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
}
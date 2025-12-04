import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Input } from "@/components/ui/input"
export default function ContactPage(){
    return(
        <div className="w-full min-h-fit">
            <div className="m-4">
                {/*Contact Us Section*/}
                <div>
                    <h1>Contact Us</h1>
                    <p>Not sure what you need? The team at Skyline will be happy to listen to you and fulfill you project ideas even you haven't considered</p>
                    <div>
                        <Mail/>
                        <p>amatyahrit@Gmail.com</p>
                    </div>
                    <div>
                        <Phone/>
                        <p>9742935093</p>
                    </div>
                </div>

                <div>
                    <h3>We'd love to hear from you!<br/>
                    Let's get in touch</h3>

                    <div>
                        <label htmlFor="">
                        <p>Full Name</p>
                        <Input type="email" placeholder="Email" />
                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
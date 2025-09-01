
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-foundation-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foundation-green mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you want to volunteer, donate, 
            or learn more about our programs, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foundation-green mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-foundation-gradient rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foundation-green mb-1">Phone</h4>
                      <p className="text-gray-700">+123-456-7890</p>
                      <p className="text-sm text-gray-600">Available Monday - Friday, 9 AM - 5 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-foundation-gradient rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foundation-green mb-1">Email</h4>
                      <p className="text-gray-700">info@humanityalive.org</p>
                      <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-foundation-gradient rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foundation-green mb-1">Office</h4>
                      <p className="text-gray-700">Karachi, Pakistan</p>
                      <p className="text-sm text-gray-600">Serving communities nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foundation-green mb-8">
              Send us a Message
            </h3>
            
            <Card className="border-green-200">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunities</option>
                      <option>Donation Questions</option>
                      <option>Partnership Proposal</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-foundation-gradient hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg p-8">
          <Heart className="w-16 h-16 text-foundation-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foundation-green mb-4">
            Join Our Mission
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Together, we can create a ripple effect of kindness and compassion. 
            Every action, no matter how small, contributes to positive change in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-foundation-gradient hover:opacity-90">
              Become a Volunteer
            </Button>
            <Button variant="outline" className="border-green-500 text-foundation-green hover:bg-green-50">
              Make a Donation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

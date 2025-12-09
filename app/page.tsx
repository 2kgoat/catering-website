'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Users, Calendar, Star, Mail, Clock, Award, Heart, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { InquiryForm } from '@/components/inquiry-form';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price_from: number;
  image_url: string;
  popular: boolean;
  display_order: number;
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('popular', true)
      .order('display_order', { ascending: true });

    if (data) {
      setServices(data);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00di0yem0wLTMwYzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNFY0ek0wIDM0YzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNHYtMnptMC0zMGMwLTIgMi00IDItNHMyIDIgMiA0djJjMCAyLTIgNC0yIDRzLTItMi0yLTRWNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">Award-Winning Catering Since 2010</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Exquisite Flavors<br />
              <span className="text-amber-100">Unforgettable Events</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Elevate your special occasions with our artisanal catering services. From intimate gatherings to grand celebrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-amber-50 text-lg px-8 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                <a href="#inquiry">Get a Quote</a>
              </Button>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                <a href="#services">View Menu</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Chefs</h3>
              <p className="text-gray-600 leading-relaxed">Culinary masters with decades of combined experience</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600 leading-relaxed">Locally sourced, organic produce delivered daily</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Any Size Event</h3>
              <p className="text-gray-600 leading-relaxed">From intimate dinners to 100+ guest celebrations</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600 leading-relaxed">Impeccable attention to detail in every aspect</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Handcrafted menus designed to delight your guests and create memorable dining experiences
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <div className="h-64 bg-gray-200"></div>
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <div className="h-64 relative overflow-hidden group">
                    {service.image_url ? (
                      <>
                        <img
                          src={service.image_url}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                      </>
                    ) : (
                      <>
                        <div className="h-full bg-gradient-to-br from-red-200 via-amber-200 to-red-300"></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ChefHat className="h-24 w-24 text-white/80" />
                        </div>
                      </>
                    )}
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-red-900 text-white border-0 shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl">{service.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-red-900">
                          ${service.price_from}
                          <span className="text-sm text-gray-500 font-normal">/person plus tax</span>
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs uppercase tracking-wide">
                        {service.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Perfect for Every Occasion
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We bring culinary excellence to all types of events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Weddings', icon: Heart, desc: 'Make your special day unforgettable' },
                { title: 'Corporate Events', icon: Users, desc: 'Impress clients and colleagues' },
                { title: 'Private Parties', icon: Star, desc: 'Celebrate in style with loved ones' },
                { title: 'Special Occasions', icon: Calendar, desc: 'Anniversaries, birthdays, and more' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Let's Plan Your Event
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl text-white/90">Events Catered</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl text-white/90">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-xl text-white/90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're here to answer your questions and bring your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="w-14 h-14 bg-red-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email Us</h3>
                <a href="mailto:qscatering650@gmail.com" className="text-gray-600 hover:text-red-900 transition-colors">
                  qscatering650@gmail.com
                </a>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="w-14 h-14 bg-red-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Instagram className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Message Us</h3>
                <a href="https://www.instagram.com/qscatering650/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-900 transition-colors">
                  @qscatering650
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

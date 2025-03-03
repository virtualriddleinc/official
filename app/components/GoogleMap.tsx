"use client";

import { useEffect, useRef } from 'react';

// Google Maps tiplerini tanımlıyoruz
declare global {
  interface Window {
    google: {
      maps: {
        Map: any;
        Marker: any;
        Geocoder: any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

export default function GoogleMap({ address, apiKey }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Google Maps API'sini yükle
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (mapRef.current && !mapInstanceRef.current) {
          // Geocoding servisi oluştur
          const geocoder = new window.google.maps.Geocoder();

          // Adresi koordinatlara dönüştür
          geocoder.geocode({ address }, (results: any, status: string) => {
            if (status === 'OK' && results && results[0]) {
              const location = results[0].geometry.location;

              // Harita oluştur
              const map = new window.google.maps.Map(mapRef.current, {
                center: location,
                zoom: 15,
                styles: [
                  {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [{ color: "#242f3e" }]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#242f3e" }]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#746855" }]
                  },
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }]
                  }
                ]
              });

              // Marker ekle
              new window.google.maps.Marker({
                map,
                position: location,
                animation: window.google.maps.Animation.DROP
              });

              mapInstanceRef.current = map;
            }
          });
        }
      };
    };

    loadGoogleMaps();

    // Cleanup
    return () => {
      const script = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (script) {
        script.remove();
      }
    };
  }, [address, apiKey]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden"
      style={{ filter: 'grayscale(20%) contrast(110%)' }}
    />
  );
} 
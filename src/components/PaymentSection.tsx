
import React from 'react';
import { DollarSign } from 'lucide-react';

const PaymentSection = () => {
  return (
    <section className="py-32 px-4 pb-48 relative">
      {/* Explosive background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-neon-pink via-transparent to-neon-cyan animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-neon-purple via-transparent to-neon-orange animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-orbitron font-bold chrome-text text-center mb-24 hover:animate-neon-pulse transform hover:scale-110 transition-all duration-700"
            style={{ 
              filter: 'drop-shadow(0 0 40px hsl(var(--neon-orange))) drop-shadow(0 0 80px hsl(var(--neon-pink)))',
              textShadow: '0 0 25px hsl(var(--neon-orange)), 0 0 50px hsl(var(--neon-orange)), 0 0 100px hsl(var(--neon-orange))'
            }}>
          [ PAYMENT_ACCEPTED ]
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { name: "PayPal", color: "neon-cyan", icon: DollarSign },
            { name: "Venmo", color: "neon-pink", icon: DollarSign },
            { name: "Cash App", color: "neon-purple", icon: DollarSign },
            { name: "Bank Transfer", color: "neon-orange", icon: DollarSign }
          ].map((payment, index) => {
            const IconComponent = payment.icon;
            return (
              <div key={index} className="vhs-label p-12 rounded-2xl text-center hover:scale-125 hover:rotate-6 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-pink/40 transform relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent animate-pulse group-hover:animate-ping"></div>
                <IconComponent className={`text-${payment.color} mx-auto mb-6 animate-bounce shadow-2xl shadow-neon-pink/50 relative z-10`} 
                              size={56} 
                              style={{ 
                                animationDelay: `${index * 0.3}s`,
                                filter: `drop-shadow(0 0 20px hsl(var(--${payment.color.replace('neon-', '')})))` 
                              }} />
                <p className={`${payment.color} font-orbitron font-bold text-2xl animate-neon-flicker relative z-10`}
                   style={{ textShadow: `0 0 15px hsl(var(--${payment.color.replace('neon-', '')})), 0 0 30px hsl(var(--${payment.color.replace('neon-', '')}))` }}>
                  {payment.name}
                </p>
                <div className={`mt-4 h-2 bg-${payment.color} rounded-full animate-pulse shadow-lg relative z-10`} 
                     style={{ 
                       animationDelay: `${index * 0.2}s`,
                       boxShadow: `0 0 20px hsl(var(--${payment.color.replace('neon-', '')}))` 
                     }}></div>
                
                {/* Payment-specific floating elements */}
                <div className={`absolute top-2 right-2 w-2 h-2 bg-${payment.color} rounded-full animate-ping opacity-80`} style={{ animationDelay: `${index * 0.5}s` }}></div>
                <div className={`absolute bottom-2 left-2 w-3 h-3 bg-${payment.color} rounded-full animate-ping opacity-60`} style={{ animationDelay: `${index * 0.7}s` }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;

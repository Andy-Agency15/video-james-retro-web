
import React from 'react';
import { DollarSign } from 'lucide-react';

const PaymentBentoCard = () => {
  return (
    <div className="vhs-border bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.01] transition-all duration-700 hover:shadow-2xl hover:shadow-neon-orange/50">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 via-transparent to-neon-pink/10 animate-pulse group-hover:animate-ping"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold chrome-text text-center mb-8 hover:animate-neon-pulse transform hover:scale-110 transition-all duration-500"
            style={{ 
              filter: 'drop-shadow(0 0 30px hsl(var(--neon-orange))) drop-shadow(0 0 60px hsl(var(--neon-pink)))',
              textShadow: '0 0 20px hsl(var(--neon-orange)), 0 0 40px hsl(var(--neon-orange))'
            }}>
          [ PAYMENT_ACCEPTED ]
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "PayPal", color: "neon-cyan", icon: DollarSign },
            { name: "Venmo", color: "neon-pink", icon: DollarSign },
            { name: "Cash App", color: "neon-purple", icon: DollarSign },
            { name: "Bank Transfer", color: "neon-orange", icon: DollarSign }
          ].map((payment, index) => {
            const IconComponent = payment.icon;
            return (
              <div key={index} className="vhs-label p-6 rounded-xl text-center hover:scale-110 hover:rotate-3 transition-all duration-500 hover:shadow-xl hover:shadow-neon-pink/40 transform relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent animate-pulse group-hover:animate-ping"></div>
                <IconComponent className={`text-${payment.color} mx-auto mb-4 animate-bounce shadow-xl shadow-neon-pink/50 relative z-10`} 
                              size={36} 
                              style={{ 
                                animationDelay: `${index * 0.3}s`,
                                filter: `drop-shadow(0 0 15px hsl(var(--${payment.color.replace('neon-', '')})))` 
                              }} />
                <p className={`${payment.color} font-orbitron font-bold text-lg animate-neon-flicker relative z-10`}
                   style={{ textShadow: `0 0 12px hsl(var(--${payment.color.replace('neon-', '')}))` }}>
                  {payment.name}
                </p>
                <div className={`mt-3 h-2 bg-${payment.color} rounded-full animate-pulse shadow-lg relative z-10`} 
                     style={{ 
                       animationDelay: `${index * 0.2}s`,
                       boxShadow: `0 0 15px hsl(var(--${payment.color.replace('neon-', '')}))` 
                     }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentBentoCard;

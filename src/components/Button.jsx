import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Button = ({ 
  children = "Get Started", 
  variant = "primary", 
  size = "medium",
  icon = true,
  glow = false,
  onClick,
  disabled = false,
  className = "",
  as: Component = "button",
  ...props
}) => {
  const buttonClasses = `
    modern-btn 
    modern-btn-${variant} 
    modern-btn-${size} 
    ${glow ? 'modern-btn-glow' : ''} 
    ${disabled ? 'modern-btn-disabled' : ''} 
    ${className}
  `.trim();

  return (
    <Component
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={typeof children === 'string' ? children : 'Button'}
      {...props}
    >
      {/* Animated Background */}
      <div className="btn-bg"></div>
      <div className="btn-gradient"></div>
      
      {/* Ripple Effect */}
      <div className="btn-ripple"></div>
      
      {/* Content */}
      <span className="btn-content">
        {/* {glow && <Sparkles className="btn-sparkle" size={16} />} Removed sparkle icon */}
        <span className="btn-text">{children}</span>
        {icon && <ArrowRight className="btn-arrow" size={18} />}
      </span>
      
      {/* Floating Particles */}
      {/*
      <div className="btn-particles">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`floating-particle particle-${i + 1}`}></div>
        ))}
      </div>
      */}
      
      {/* Shine Effect */}
      {/* <div className="btn-shine"></div> */}
    </Component>
  );
};

// Button Variants
export const GlowButton = (props) => (
  <Button {...props} variant="glow" glow={true} />
);

export const SecondaryButton = (props) => (
  <Button {...props} variant="secondary" />
);

export const OutlineButton = (props) => (
  <Button {...props} variant="outline" />
);

export const GhostButton = (props) => (
  <Button {...props} variant="ghost" icon={false} />
);

export const NeonButton = (props) => (
  <Button {...props} variant="neon" glow={true} />
);

export default Button;
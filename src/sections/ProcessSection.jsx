import { processSteps } from '../data/services';

export default function ProcessSection() {
  return (
    <section id="process" className="bg-section-light section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title">
            От заявки до закрывающих документов
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-card-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-card-border flex items-center justify-center mb-4 group-hover:border-accent transition-colors relative">
                  <span className="text-accent font-bold text-xl">{step.step}</span>
                  {/* Active indicator on hover */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-text-dark text-base mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

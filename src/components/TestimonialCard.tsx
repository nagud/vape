import type { Testimonial } from "../types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="premium-card rounded-[2rem] p-7">
      <div className="mb-5 flex gap-1 text-cyan-200" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <span key={index}>*</span>
        ))}
      </div>
      <blockquote className="text-lg leading-8 text-slate-200">"{testimonial.quote}"</blockquote>
      <figcaption className="mt-7">
        <p className="font-bold text-white">{testimonial.name}</p>
        <p className="text-sm text-slate-400">{testimonial.location}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <blockquote className="card">
      <p>“{text}”</p>
      <footer>{name}</footer>
    </blockquote>
  );
}

interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Section({ title, children }: SectionProps) {
    return (
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-6 leading-relaxed">{title}</h2>
        <div>{children}</div>
      </section>
    );
  }
  
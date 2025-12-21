interface Feature {
  id: number;
  title: string;
  description: string;
}

interface HomeFeaturesProps {
  features?: Feature[];
}

const HomeFeatures: React.FC<HomeFeaturesProps> = ({
  features = [
    { id: 1, title: 'Feature 1', description: 'Description of feature 1' },
    { id: 2, title: 'Feature 2', description: 'Description of feature 2' },
    { id: 3, title: 'Feature 3', description: 'Description of feature 3' },
  ],
}) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <li key={feature.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeFeatures;


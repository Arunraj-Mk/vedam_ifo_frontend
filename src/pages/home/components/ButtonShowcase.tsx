import Button from '@/components/Button';

const ButtonShowcase = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Button Variants</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          All four button variants available in our design system
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Primary Button</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Secondary Button</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Tertiary Button</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="tertiary">Tertiary Button</Button>
                  <Button variant="tertiary" size="sm">Small</Button>
                  <Button variant="tertiary" size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Quaternary Button</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="quaternary">Quaternary Button</Button>
                  <Button variant="quaternary" size="sm">Small</Button>
                  <Button variant="quaternary" size="lg">Large</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Full Width Buttons</h3>
            <div className="space-y-3 max-w-md mx-auto">
              <Button variant="primary" fullWidth>Full Width Primary</Button>
              <Button variant="secondary" fullWidth>Full Width Secondary</Button>
              <Button variant="tertiary" fullWidth>Full Width Tertiary</Button>
              <Button variant="quaternary" fullWidth>Full Width Quaternary</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonShowcase;


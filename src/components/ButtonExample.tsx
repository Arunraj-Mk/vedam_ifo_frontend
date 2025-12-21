import Button from './Button';

/**
 * Example component demonstrating all 4 button variants
 * This can be used as a reference or removed if not needed
 */
const ButtonExample = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
          <Button variant="quaternary">Quaternary Button</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Full Width</h2>
        <div className="max-w-md">
          <Button variant="primary" fullWidth>Full Width Button</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;


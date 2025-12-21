interface TestHeaderProps {
  title?: string;
}

const TestHeader: React.FC<TestHeaderProps> = ({ title = 'Test Page' }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default TestHeader;


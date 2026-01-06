import './App.css';
import { useEffect, useState } from 'react';
import { fetchData, type testData } from './api';

function App() {
  const [data, setData] = useState<testData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-amber-200 h-screen w-screen flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-semibold">Heading</h1>
      <p className="text-lg">
        Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Vitae veritatis necessitatibus ullam consequatur iste quisquam
        quos quibusdam, sint excepturi in neque. Repudiandae voluptates,
        officiis reiciendis ipsa nesciunt tempore illum minima.
      </p>
      <div className="h-[60%] flex flex-col items-center justify-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {data && <p className="text-green-500">Message: {data.message}</p>}
      </div>
    </div>
  );
}

export default App;

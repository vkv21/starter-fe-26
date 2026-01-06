import { z } from 'zod';

const url = 'http://localhost:3000';

const testDataSchema = z.object({
  message: z.string(),
});

export type testData = z.infer<typeof testDataSchema>;

export const fetchData = async (): Promise<testData> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return testDataSchema.parse(data);
};

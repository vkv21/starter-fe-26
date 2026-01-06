import { z } from 'zod';
import { config } from './config';

const testDataSchema = z.object({
  message: z.string(),
});

export type testData = z.infer<typeof testDataSchema>;

export const fetchData = async (): Promise<testData> => {
  const response = await fetch(config.apiUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  const result = testDataSchema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid response format: ${result.error.message}`);
  }

  return result.data;
};

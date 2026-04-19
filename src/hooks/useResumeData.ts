import { useState, useEffect } from 'react';
import type { ResumeData } from '../types';

export const useResumeData = () => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/resume-data.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch resume data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        console.error('Error loading resume data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  return { data, loading, error };
};

import { NextResponse } from "next/server";
import axios from "axios";
import useSWR from "swr";

interface S3APIResponse {
  status: number;
  body: string;
}

export const useGetS3Document = (key: string | null) => {
  const { data, isLoading, error } = useSWR(key, (key: string | null) => {
    if (key === null) return null;
    return axios
      .get<S3APIResponse>(`/api/s3?key=${key}`)
      .then((res) => res.data.body);
  });

  return { data, isLoading, error };
};

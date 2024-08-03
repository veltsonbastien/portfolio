import { Readable } from "stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3Client";

const streamToString = (stream: Readable): Promise<string> => {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
};

export const getObjectFromS3 = async (key: string): Promise<string> => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
  };

  try {
    const command = new GetObjectCommand(params);
    const { Body } = await s3.send(command);
    return await streamToString(Body as Readable);
  } catch (err) {
    console.error("Error getting object from S3", err);
    throw err;
  }
};

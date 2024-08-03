import { NextRequest, NextResponse } from "next/server";
import { getObjectFromS3 } from "@/helpers";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (!key) {
    return NextResponse.json({
      status: 400,
      body: "Missing document key",
    });
  }

  try {
    const document = await getObjectFromS3(key);
    return NextResponse.json({
      status: 200,
      body: document,
    });
  } catch (e) {
    return NextResponse.json({
      status: 500,
      body: `Error getting document from S3: ${e}`,
    });
  }
};

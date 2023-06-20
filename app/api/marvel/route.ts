import { NextResponse } from "next/server";
import crypto from "crypto";

function _timestamp() {
  return `${Math.floor(Date.now() / 1000)}`;
}

function _createHash(ts: string) {
  const content =
    ts + `${process.env.PRIVATE_KEY}` + `${process.env.PUBLIC_KEY}`;
  const hash = crypto.createHash("md5").update(content).digest("hex");

  return hash;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nameStartsWith = searchParams.get("nameStartsWith");
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  const ts = _timestamp();

  const params = new URLSearchParams();
  params.set("ts", ts);
  params.set("hash", _createHash(ts));
  params.set("apikey", `${process.env.PUBLIC_KEY}`);

  if (nameStartsWith) params.set("nameStartsWith", nameStartsWith);
  if (name) params.set("name", name);

  if (id) {
    const res = await fetch(
      `${process.env.API_URL}characters/${id}?${params.toString()}`
    );

    console.log(`${process.env.API_URL}characters/${id}?${params.toString()}`);

    const data = await res.json();

    return NextResponse.json({ ...data?.data?.results[0] });
  }

  const res = await fetch(
    `${process.env.API_URL}characters?${params.toString()}`
  );
  const data = await res.json();

  return NextResponse.json({ ...data?.data });
}

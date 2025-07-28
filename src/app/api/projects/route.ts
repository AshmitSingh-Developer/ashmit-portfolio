import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

// GET - Fetch all projects from MongoDB
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ashmit-portfolio");

    const projects = await db.collection("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(projects);
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error("❌ GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('✅ Received Body:', body);
    console.log('✅ iconLists is array:', Array.isArray(body.iconLists));

    const client = await clientPromise;
    const db = client.db("ashmit-portfolio");
    const result = await db.collection("projects").insertOne({
      title: body.title,
      des: body.des,
      img: body.img,
      iconLists: body.iconLists,
      link: body.link,
      github: body.github,
      createdAt: new Date()
    });

    console.log('✅ Inserted ID:', result.insertedId);
    return NextResponse.json({ success: true, id: result.insertedId });

  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('❌ API ERROR:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

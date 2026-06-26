import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "E-Mail und Passwort sind erforderlich." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  await sendWelcomeEmail(email);

  return NextResponse.json({ user: data.user });
}

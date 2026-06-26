# Digitale Nachlassplanung

Next.js-App mit Supabase-Auth und automatischem Willkommens-E-Mail-Trigger bei der Kundenanmeldung.

## Funktionsweise

1. Ein Kunde registriert sich über das Formular auf der Startseite.
2. `app/api/signup/route.ts` legt den Nutzer in Supabase an.
3. Direkt danach wird über Resend (`lib/email.ts`) eine Willkommens-E-Mail an den Kunden verschickt.

## Setup

1. Node.js installieren (https://nodejs.org).
2. Abhängigkeiten installieren:
   ```
   npm install
   ```
3. `.env.example` zu `.env.local` kopieren und ausfüllen:
   - `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_ANON_KEY` aus einem Supabase-Projekt (https://supabase.com).
   - `RESEND_API_KEY` aus einem Resend-Konto (https://resend.com).
   - `WELCOME_EMAIL_FROM` muss eine in Resend verifizierte Absenderadresse/Domain sein.
4. Entwicklungsserver starten:
   ```
   npm run dev
   ```

## Offene Punkte

- Supabase-Projekt und Resend-Konto müssen noch angelegt und die Domain in Resend verifiziert werden.
- E-Mail-Bestätigungslogik in Supabase Auth (z.B. ob zusätzlich die native Bestätigungs-Mail von Supabase aktiv sein soll) ist noch zu konfigurieren.
- Aktuell kein Styling/Design – nur funktionales Grundgerüst.

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import { AuthButtonServer } from "./Components/AuthButtonServer";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient( {cookies} );
  const { data: { session } } = await supabase.auth.getSession();
  
  if(!session) {
    redirect('/login');
  }
  
  const { data: posts } = await supabase.from('posts').select('*, auth.users(email)');

  return (
    <main className="">
      <AuthButtonServer />
      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  );
}

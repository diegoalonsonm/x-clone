import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import { AuthButtonServer } from "./Components/AuthButtonServer";
import { redirect } from "next/navigation";
import PostsList from "./Components/PostsList";
import { Database } from "./types/database";
import { Posts } from "./types/posts";
import { CreatePost } from "./Components/CreatePost";

export default async function Home() {
  const supabase = createServerComponentClient<Database>( {cookies} );
  const { data: { session } } = await supabase.auth.getSession();
  
  if(!session) {
    redirect('/login');
  }
  
  const { data: posts } = await supabase.from('posts').select('*, users(*)').order('created_at', { ascending: false });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">        
        <CreatePost userAvatarUrl={session.user.user_metadata.avatar_url} />
        <PostsList posts={posts as Posts[]} />
      </section>      
        <AuthButtonServer />
    </main>
  );
}

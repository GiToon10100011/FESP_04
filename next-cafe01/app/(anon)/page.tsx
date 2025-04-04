import { createClient } from "@/utils/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: menus } = await supabase.from("menu").select();

  console.log(menus)

  return <pre>{JSON.stringify(menus, null, 2)}</pre>;
}

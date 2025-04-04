import { createClient } from "@/utils/supabase/server";
import { Menu } from "../../../domain/entities/Menu";
import { IMenuRepository } from "../../../domain/repositories/MenuRepository";

export class SbMenuRepository implements IMenuRepository {
  async findById(id: number): Promise<Menu> {
    // Implement logic to fetch a menu by ID from Supabase
    console.log("Menu ID:", id);
    return {
      id: id,
      korName: "Sample Menu",
      engName: "Sample Menu",
      price: 10.99,
    };
  }

  async findAll(): Promise<Menu[]> {
    // Implement logic to fetch all menus from Supabase
    const supabase = await createClient();
    const { data } = await supabase.from("menu").select();
    const menus: Menu[] = (data || []).map(({id, kor_name, eng_name, price}) => ({
      id,
      korName: kor_name,
      engName: eng_name,
      price
    }));
    return menus;
  }

  async save(menu: Menu): Promise<Menu> {
    // Implement logic to save a menu to Supabase
    return menu;
  }
}

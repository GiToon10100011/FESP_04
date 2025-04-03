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
    return [{
        id: 1,
        korName: "Sample Menu",
        engName: "Sample Menu",
        price: 10.99,
    }];
  }

  async save(menu: Menu): Promise<Menu> {
    // Implement logic to save a menu to Supabase
    return menu;
  }
}
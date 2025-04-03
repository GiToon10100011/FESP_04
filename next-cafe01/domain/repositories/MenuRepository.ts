import { Menu } from "../entities/Menu";

export interface IMenuRepository {
  findById(id: number): Promise<Menu>;
  findAll(): Promise<Menu[]>;
  save(menu:Menu): Promise<Menu>;
}

//interface는 구현체에서 사용하는것을 모른다. 

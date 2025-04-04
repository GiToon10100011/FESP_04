import { IMenuRepository } from "@/domain/repositories/MenuRepository";
import { MenuListDto } from "./dto/MenuListDto";
export default class MenuListUsecase {
  private menuRepository: IMenuRepository; // Add type definition for menuRepository

  constructor(menuRepository: IMenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute() {
    try {
      const menus = await this.menuRepository.findAll();
      const menuListDto: MenuListDto = {
        menus: menus.map((menu) => {
          return {
            id: menu.id,
            korName: menu.korName,
            engName: menu.engName,
          };
        }),
        totalCount: menus.length,
        totalPages: Math.ceil(menus.length / 10),
        hasPreviousPage: false,
        hasNextPage: false,
        pages: [],
      };
      return menuListDto;
    } catch (error) {
      console.error("Error fetching menus:", error);
      throw new Error("Failed to fetch menus");
    }
  }
}

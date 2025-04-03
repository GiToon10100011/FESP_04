import { IMenuRepository } from "@/domain/repositories/MenuRepository";

export default class MenuListUsecase {
  private menuRepository: IMenuRepository; // Add type definition for menuRepository

  constructor(menuRepository: IMenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute() {
    try {
      const menus = await this.menuRepository.findAll();
      return menus;
    } catch (error) {
      console.error("Error fetching menus:", error);
      throw new Error("Failed to fetch menus");
    }
  }
}

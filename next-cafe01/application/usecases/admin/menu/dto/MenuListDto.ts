import { MenuDto } from "./MenuDto";

export class MenuListDto {
  constructor(
    public menus: MenuDto[],
    public totalCount: number,
    public totalPages: number,
    public hasPreviousPage: boolean,
    public hasNextPage: boolean,
    public pages: number[]
  ) {}
}


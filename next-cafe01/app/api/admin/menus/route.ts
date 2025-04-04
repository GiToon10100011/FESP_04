import { MenuListDto } from "@/application/usecases/admin/menu/dto/MenuListDto";
import MenuListUsecase from "@/application/usecases/admin/menu/MenuListUsecase";
import { SbMenuRepository } from "@/infra/repositories/supabase/SbMenuRepository";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const menuRepository = new SbMenuRepository();
    const menuListUsecase = new MenuListUsecase(menuRepository);
    const menuListDto: MenuListDto = await menuListUsecase.execute();

    return NextResponse.json(
      {
        success: true,
        data: menuListDto,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching menus:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch menus",
      },
      { status: 500 }
    );
  }
}

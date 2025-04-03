import { NextRequest, NextResponse } from "next/server";
import { SbMenuRepository } from "../../../../infra/repositories/supabase/SbMenuRepository";

export async function GET(request: NextRequest) {
  try {
    const menuRepository = new SbMenuRepository();
    const menus = await menuRepository.findAll();
    
    return NextResponse.json({ 
      success: true, 
      data: menus 
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching menus:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch menus" 
    }, { status: 500 });
  }
}

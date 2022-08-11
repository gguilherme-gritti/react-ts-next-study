import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  /* Alguma autenticação aqui */
  return NextResponse.redirect("/");
};

export default middleware;

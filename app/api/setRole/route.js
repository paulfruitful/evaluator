import { setUserRole } from "@/app/_lib/setRole"

export async function POST(req) {
  const data=await req.json()
  await setUserRole(data.userId,data.role,)

}
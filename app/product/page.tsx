import { redirect } from "next/navigation";

/** Legacy route: product overview is now the platform page. */
export default function ProductRedirectPage() {
  redirect("/platform");
}

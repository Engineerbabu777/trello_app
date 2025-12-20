import { PropsWithChildren } from "react";
import Realm from "realm";

export default function RealmProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}

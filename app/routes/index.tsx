import { Link, useNavigate } from "@remix-run/react";
import { Button } from "kl-module";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/pages")}>Go to pages</Button>
    </div>
  );
}

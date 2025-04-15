import Link from "next/link";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function WriteLayout({ children }) {
  return (
    <div className="px-4 py-8">
      <div>
        <Link
          href="/dashboard"
          className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<BarLoader color="green" width={"100%"} />}>
        {children}
      </Suspense>
    </div>
  );
}
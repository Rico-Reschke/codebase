import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Exchange", href: "/exchange" },
  { name: "Security", href: "/security" },
  { name: "Support", href: "/support" },
  { name: "FAQ", href: "/faq" },
];

export const MainNavigationLinks = ({
  currentPath,
}: {
  currentPath: string;
}) => (
  <div className="-mr-14 hidden flex-1 items-center justify-center sm:ml-6 sm:flex sm:space-x-8">
    {navigation.map((item) => (
      <Link href={item.href} className="group relative" key={item.name}>
        <span
          className={`text-sm font-medium text-black ${currentPath === item.href ? "active" : ""}`}
        >
          {item.name}
        </span>
        <span
          className={`absolute bottom-0 left-0 h-0.5 w-0 bg-[#176EB5] ${currentPath === item.href ? "w-full" : "bg-black"} ${currentPath !== item.href ? "transition-all duration-300 group-hover:w-full" : ""}`}
        ></span>
      </Link>
    ))}
  </div>
);

export const MobileNavigationLinks = ({
  currentPath,
}: {
  currentPath: string;
}) => (
  <div className="space-y-2 py-6">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {item.name}
      </Link>
    ))}
  </div>
);

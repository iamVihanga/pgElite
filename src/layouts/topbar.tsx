import { Button } from "@/components/ui/button";
import { productName, description } from "../../package.json";
import { MinusIcon, XIcon, RectangleHorizontalIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { WindowAction } from "@/shared/types/utils";

function WindowActionButton({ action }: { action: WindowAction }) {
  const handleClick = () => {
    switch (action) {
      case WindowAction.Minimize:
        window.electron.minimize();
        break;
      case WindowAction.Maximize:
        window.electron.maximize();
        break;
      case WindowAction.Close:
        window.electron.close();
        break;
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className={cn(
        "p-0 cursor-pointer flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 rounded-none h-8 w-12 text-foreground/55",
        "transition-colors duration-200 ease-in-out",
        action === WindowAction.Close &&
          "hover:bg-destructive/20 hover:text-destructive"
      )}
    >
      {action === WindowAction.Minimize && <MinusIcon className="w-4 h-4" />}
      {action === WindowAction.Maximize && (
        <RectangleHorizontalIcon className="w-4 h-4" />
      )}
      {action === WindowAction.Close && <XIcon className="w-4 h-4" />}
    </Button>
  );
}

export default function Topbar() {
  return (
    <header className="inset-0 h-8 w-full bg-secondary text-secondary-foreground pl-4 flex items-center justify-between">
      <div className="text-sm font-semibold">
        <span className="font-semibold">{productName}</span>
        <span className="mx-2 font-normal">|</span>
        <span className="font-light text-secondary-foreground/90 text-xs">
          {description}
        </span>
      </div>
      <div className="flex items-center space-x-[1px]">
        <WindowActionButton action={WindowAction.Minimize} />
        <WindowActionButton action={WindowAction.Maximize} />
        <WindowActionButton action={WindowAction.Close} />
      </div>
    </header>
  );
}
//

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";

interface CartItemListProps {
  cart: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  variant?: 'page' | 'drawer';
}

export const CartItemList = ({ 
  cart, 
  updateQuantity, 
  removeFromCart, 
  variant = 'page' 
}: CartItemListProps) => {
  const isDrawer = variant === 'drawer';

  return (
    <div className={isDrawer ? "divide-y divide-border/20" : "space-y-8"}>
      {cart.map((item) => (
        <div key={item.id} className={isDrawer ? "flex gap-4 py-4 first:pt-0 last:pb-0" : "flex gap-6 border-b border-border/50 pb-6"}>
          <div className={isDrawer ? "w-20 h-24 bg-muted relative shrink-0 border border-border/10" : "w-24 h-32 bg-muted relative"}>
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
          <div className={`flex-grow flex flex-col justify-between ${isDrawer ? 'py-0.5' : ''}`}>
            <div>
              <div className="flex justify-between gap-4">
                <h3 className={isDrawer ? "font-light tracking-wide text-sm text-foreground/90 line-clamp-2" : "font-light tracking-wide text-lg"}>
                    {item.name}
                </h3>
                <p className={isDrawer ? "text-sm font-medium shrink-0" : "text-lg font-light"}>
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <p className={isDrawer ? "text-xs font-light text-muted-foreground mt-0.5" : "text-sm font-light text-foreground/70 mt-1"}>
                ${item.price.toFixed(2)} each
              </p>
            </div>
            
            <div className={`flex items-center justify-between ${isDrawer ? 'mt-2' : 'mt-4'}`}>
              <div className="flex items-center border border-border/40 rounded-none bg-background">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={`p-1 ${isDrawer ? 'px-2.5' : 'px-3'} text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors ${isDrawer ? 'text-xs' : 'text-sm'}`}
                  disabled={item.quantity <= 1}
                >
                  &minus;
                </button>
                <span className={`px-2 ${isDrawer ? 'text-xs min-w-[20px]' : 'px-3 text-sm min-w-[24px]'} font-light text-center select-none`}>
                    {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={`p-1 ${isDrawer ? 'px-2.5' : 'px-3'} text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors ${isDrawer ? 'text-xs' : 'text-sm'}`}
                >
                  +
                </button>
              </div>
              
              <Button 
                variant="ghost" 
                className={`w-max p-0 ${isDrawer ? 'text-xs font-light tracking-widest text-muted-foreground uppercase' : 'text-xs uppercase tracking-widest text-foreground/50'} hover:text-primary h-auto`} 
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

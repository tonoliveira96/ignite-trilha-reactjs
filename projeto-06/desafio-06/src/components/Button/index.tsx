import { ComponentProps } from "react";
interface Props extends ComponentProps<'button'> {
  variant?: 'primary' | 'borderless';
}

export default function Button({ variant = 'primary' ,children, ...rest }: Props) {
  
  const variantsStyle = {
    primary: "bg-gray-600",
    borderless: "bg-transparent"
  }

  return (
    <button {...rest} className={`flex w-full items-center justify-center mb-4 text-white font-regular gap-3 px-5 py-4 rounded-lg font-bold ${variantsStyle[variant]}`}>
      {children}
    </button>
  );
}
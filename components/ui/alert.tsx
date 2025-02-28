import * as React from "react" //Importamos la libreria de React 
import { cva, type VariantProps } from "class-variance-authority" //Importamos la libreria de class-variance-authority, esta las tienes que descargar en mi caso fue con = npm install class-variance-authority
import { cn } from "../../lib/util" //Importamos la funcion cn de util.ts

const alertVariants = cva( //Creamos la constante alertVariants y le pasamos la funcion cva
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", //Pasamos los estilos de tailwild
  {
    variants: { //Creamos los variantes
      variant: { //Creamos el variant
        default: "bg-background text-foreground", //Pasamos los estilos de tailwild
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", //Pasamos los estilos de tailwild
      },
    },
    defaultVariants: { //Creamos el defaultVariants
      variant: "default", 
    },
  },
)

const Alert = React.forwardRef< //Creamos la constante Alert y le pasamos la funcion React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }


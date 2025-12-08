// Utilitários de Estilização (Shadcn UI)
// 'cn' combina classes do Tailwind com segurança (clsx + tailwind-merge).
// Permite renderização condicional de classes CSS.

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

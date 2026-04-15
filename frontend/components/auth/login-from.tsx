import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/layout/auth-card";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <AuthCard>
      <h1 className="text-2xl font-bold text-center mb-25">Boas vindas!</h1>

      <div className="space-y-2">
        <div className="space-y-2 mb-8">
          <Label>E-mail</Label>
          <Input placeholder="Seu e-mail" className="h-12 shadow-none" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Senha</Label>
            <Link
              href="#"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>

          <Input
            type="password"
            placeholder="Sua senha"
            className="h-12 shadow-none"
          />
        </div>

        <Button className="cursor-pointer w-full h-12 font-bold text-white">
          Entrar
        </Button>

        <div className="pt-2">
          <Label>
            Não possui login?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Cadastre-se
            </Link>
          </Label>
        </div>
      </div>
    </AuthCard>
  );
}

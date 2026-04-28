"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/layout/auth-card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    setErrors((prev) => ({ ...prev, [input.id]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setErrors((prev) => ({ ...prev, [input.id]: false }));
  };

  const errorClass = (field: string) =>
    errors[field] ? "border-red-500 focus-visible:ring-red-500" : "";

  return (
    <AuthCard>
      <h1 className="text-2xl font-bold text-center mb-25">Boas vindas!</h1>

      <Link
        href="/login"
        className="text-gray-600 hover:text-gray-800 mb-4 inline-flex items-center"
      >
        <ArrowLeft size={18} />
      </Link>

      <form className="space-y-2">
        <div className="space-y-2 mb-8">
          <Label htmlFor="name">
            Nome Completo <span className="text-red-500">*</span>
          </Label>
          <Input
            required
            id="name"
            placeholder="Seu nome completo"
            className={`h-12 shadow-none ${errorClass("name")}`}
            onInvalid={handleInvalid}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2 mb-8">
          <Label htmlFor="email">
            E-mail <span className="text-red-500">*</span>
          </Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Seu e-mail"
            className={`h-12 shadow-none ${errorClass("email")}`}
            onInvalid={handleInvalid}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2 mb-8">
          <Label htmlFor="password">
            Senha <span className="text-red-500">*</span>
          </Label>
          <Input
            required
            id="password"
            type="password"
            placeholder="Sua senha"
            className={`h-12 shadow-none ${errorClass("password")}`}
            onInvalid={handleInvalid}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">
            Confirmar Senha <span className="text-red-500">*</span>
          </Label>
          <Input
            required
            id="confirm-password"
            type="password"
            placeholder="Sua senha"
            className={`h-12 shadow-none ${errorClass("confirm-password")}`}
            onInvalid={handleInvalid}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="cursor-pointer w-full h-12 font-bold text-white"
        >
          Entrar
        </Button>

        <div className="pt-2">
          <Label>
            Já possui login?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Entre aqui
            </Link>
          </Label>
        </div>
      </form>
    </AuthCard>
  );
}

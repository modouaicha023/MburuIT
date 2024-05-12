"use client";
import Container from "@/components/ui/container";
import React, { useState } from "react";
import { LogIn, Phone, Lock, Eye, EyeOff, User, KeySquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import { signUp } from "@/api/user/api";
import { UserType } from "@/lib/enums";

const formSchema = z.object({
  firstname: z.string().min(5, {
    message: "Your name must be at least 5 strings.",
  }),
  lastname: z.string().min(1, {
    message: "Your name must be at least 5 strings.",
  }),
  username: z.string().min(5, {
    message: "Your name must be at least 5 strings.",
  }),
  phone: z.string().min(9, {
    message: "Your number must be at least 9 digits.",
  }),

  password: z.string().min(4, {
    message: "Your password must be at least 4 digits",
  }),
});
export default function SignUp() {
  const [viewPassword, setViewPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      phone: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
      userType: UserType.CLIENT,
    };
    await signUp(data);
  }

  return (
    <>
      <Header />
      <Container>
        <div className="flex w-full  min-h-screen h-fit">
          <div className=" w-1/2 min-h-full bg-login hidden md:block bg-cover bg-center">
            <div className="w-full h-full flex flex-col gap-8 items-center justify-center p-4 bg-yellow-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border">
              <h1 className="font-bold text-4xl">
                Optimisez votre{" "}
                <span className="text-yellow-500">Boulangerie</span> avec notre
                plateforme de Gestion{" "}
                <span className="text-yellow-500">Simplifiée</span>.
              </h1>
              <p className="font-medium text-1xl">
                Connectez-vous pour une expérience de gestion simplifiée. Gérez
                votre boulangerie facilement, accédez à tous les outils dont
                vous avez besoin pour développer votre entreprise, suivez les
                ventes et restez informé de l'état de votre boulangerie.
              </p>
            </div>
          </div>
          <div className="w-full h-fit md:w-1/2 lg:w-1/2 px-7 py-4 flex items-center justify-center">
            <Card className=" w-full min-w-[230px] h-fit p-6 ">
              <CardHeader>
                <CardTitle>S'inscrire sur la plateforme</CardTitle>
                <CardDescription>
                  Commencez par ouvrir un compte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            Votre identiant
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="spin-button-none"
                              type="text"
                              placeholder="un identiant pour vous connecter"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            Mot de passe
                          </FormLabel>
                          <div className="flex gap-6 items-center justify-center">
                            <FormControl>
                              <Input
                                type={viewPassword ? "text" : "password"}
                                placeholder="000000"
                                inputMode="numeric"
                                {...field}
                              />
                            </FormControl>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={(e) => {
                                e.preventDefault();
                                setViewPassword(!viewPassword);
                              }}>
                              {viewPassword ? <Eye /> : <EyeOff />}
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            Prénom
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="spin-button-none"
                              type="text"
                              placeholder="Samba"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            Nom
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="spin-button-none"
                              type="text"
                              placeholder="Diop"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            Téléphone
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="spin-button-none"
                              type="number"
                              placeholder="771683124"
                              inputMode="numeric"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg">
                      S'inscrire
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <Separator className="m-2" />
              <CardFooter className="flex ">
                <CardDescription>Vous avez déjà un compte ?</CardDescription>
                <Button variant="link" asChild>
                  <Link href={"/sign-in"}>Se connecter</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

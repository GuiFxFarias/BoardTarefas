"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"; // Certifique-se de que o componente Textarea exista ou crie um similar
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function Dashboard() {
  const formSchema = z.object({
    task: z
      .string()
      .min(5, "A tarefa deve ter pelo menos 5 caracteres.")
      .max(160, {
        message: "A tarefa esta muito longa.",
      }),
    isPublic: z.boolean(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      isPublic: false,
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="bg-white m-0 p-0">
      <div className="px-40 h-[60vh] bg-black">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[100%] flex flex-col items-start justify-center"
          >
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Qual sua tarefa?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite sua tarefa..."
                      {...field}
                      className="resize-none h-[30vh]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPublic"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center">
                  <Checkbox
                    id="terms"
                    className="bg-white text-black mr-4"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium pb-2 text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Deixar a tarefa publica
                  </label>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-[100%] bg-blue-500 text-white font-semibold"
            >
              Registrar
            </Button>
          </form>
        </Form>
      </div>
      <div className="h-[27vh] bg-white">
        <h1 className="text-4xl text-center mt-10 font-bold">Minhas tarefas</h1>
      </div>
    </div>
  );
}

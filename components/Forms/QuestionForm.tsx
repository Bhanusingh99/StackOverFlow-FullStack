"use client";
import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionSchema } from "../../utils/validation";

const QuestionForm = () => {
    const editorRef = useRef(null);
  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tag: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-white">
                  Question Title <span className="text-red-500"> *</span>
                </FormLabel>
                <FormControl className="mt-3 py-2">
                  <Input
                    {...field}
                    className="bg-dark-300 py-4 px-4 text-white text-[16px] min-h-[50px]"
                  />
                </FormControl>
                <FormDescription className="text-light-400">
                  Be specific and Imagine that you are asking a question to
                  another person
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="explaination"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-white">
                Detail explaination of Your problem <span className="text-red-500"> *</span>                </FormLabel>
                <FormControl className="mt-3 py-2">
                <Editor
                apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
         onInit={(evt, editor) => 
            //@ts-ignore
            editorRef.current = editor}
         initialValue=""
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'print', 'preview', 'anchor',
             'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
             'insertdatetime', 'media', 'table'
           ],
           toolbar: 'undo redo |' +
           'codesample | bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
                </FormControl>
                <FormDescription className="text-light-400">
                Introduce the problem and extend on what you put in the title. minimum 20 characters
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-white">
                Tags<span className="text-red-500"> *</span>
                </FormLabel>
                <FormControl className="mt-3 py-2">
                  <Input
                    {...field}
                    placeholder="Add tags"
                    className="bg-dark-300 py-4 px-4 text-white text-[16px] min-h-[50px]"
                  />
                </FormControl>
                <FormDescription className="text-light-400">
                Add upto 3 tags to decribe what your question about. you need to pree enter to add a tag
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-purple-500 py-4 px-2 
          rounded-[10px] min-h-[50px] text-[18px] text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuestionForm;

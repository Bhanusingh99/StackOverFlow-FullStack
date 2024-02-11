"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
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
import { X } from "lucide-react";
import { createQuestion } from "../../lib/actions/questions.action";
import { useRouter, usePathname } from "next/navigation";

const type:any = 'create'

interface Props{
  mongoUserId:String
}

const QuestionForm = ({mongoUserId}:Props) => {
  const [isSubmiting,setIsSubmiting] = useState(false) 
  const router = useRouter();
  const pathName = usePathname();

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
 async function onSubmit(values: z.infer<typeof QuestionSchema>) {
    setIsSubmiting(true)

    try {
      //Make a async call to our api to create a question
      //constain all form Data

      // Navigate to Home Page
      await createQuestion({
        title:values.title,
        content:values.explaination,
        tags:values.tag,
        author:JSON.parse(mongoUserId),
        path:pathName,
      })

      router.push('/')
      console.log(values.title,values.explaination,values.tag)
    } catch (error) {
      
    } finally{
      setIsSubmiting(false)
    }
  }

  function handleKeyInput(
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) {
    if (e.key === "Enter" && field.name === "tag") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tag", {
            type: "required",
            message: "Tag must be lest then 15 Character",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tag", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tag");
        }
      } else {
        form.trigger();
      }
    }
  }

  const removeTag = (tag: string, field: any) => {
    const newTag = field.value.filter((t: string) => t !== tag);

    form.setValue("tag", newTag);
  };
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
                    placeholder="Enter Question Title..."
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
                  Detail explaination of Your problem{" "}
                  <span className="text-red-500"> *</span>{" "}
                </FormLabel>
                <FormControl className="mt-3 py-2">
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
                    onInit={(evt, editor) =>
                      //@ts-ignore
                      (editorRef.current = editor)
                    }
                    initialValue=""
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "print",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                      ],
                      toolbar:
                        "undo redo |" +
                        "codesample | bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </FormControl>
                <FormDescription className="text-light-400">
                  Introduce the problem and extend on what you put in the title.
                  minimum 20 characters
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
                  <>
                    <Input
                      placeholder="Add tags"
                      className="bg-dark-300 py-4 px-4 text-white text-[16px] min-h-[50px]"
                      onKeyDown={(e) => handleKeyInput(e, field)}
                    />
                    <div className="flex-start mt-2.5 gap-3">
                      {field.value.map((tag) => (
                        <button
                          key={tag}
                          className="flex items-center px-1 py-1 gap-1 bg-purple-500 rounded-[5px]"
                        >
                          <p className="text-white text-[14px]">{tag}</p>
                          <X
                            size={16}
                            color="white"
                            className="cursor-pointer"
                            onClick={() => removeTag(tag, field)}
                          />
                        </button>
                      ))}
                    </div>
                  </>
                </FormControl>
                <FormDescription className="text-light-400">
                  Add upto 3 tags to decribe what your question about. you need
                  to pree enter to add a tag
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-purple-500 py-2 w-fit px-6
          rounded-[10px] min-h-[45px] text-[18px] text-white"
          disabled={isSubmiting}
          >
            {
              isSubmiting ? (
                <>
                {type === 'edit' ? 'editing' : 'Posting'}
                </>
              ) : (
                <>
                {type === 'edit' ? 'Edit Post' : 'Ask Question'}
                </>
              )
            }
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuestionForm;

import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { useState } from "react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Submit Product | WeMake" }];
};

export default function SubmitPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero
        title="Submit Product"
        subtitle="Share your product with the world"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-4">
          <InputPair
            label="Name"
            description="This is the name of your product"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your product name"
            required
          />
          <InputPair
            label="Tagline"
            description="(60 characters less)"
            id="tagline"
            name="tagline"
            type="text"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The product's URL"
            id="url"
            name="url"
            type="url"
            required
            placeholder="https://example.com"
          />
          <InputPair
            textarea
            label="Description"
            description="The product's description"
            id="description"
            name="description"
            type="textarea"
            required
            placeholder="A detailed description of your product"
          />
          <SelectPair
            label="Category"
            description="The product's category"
            name="category"
            required
            placeholder="Select a category"
            options={[
              { label: "Category 1", value: "category-1" },
              { label: "Category 2", value: "category-2" },
              { label: "Category 3", value: "category-3" },
            ]}
          />
          <Button type="submit" className="">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden ">
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
          <Label className="flex flex-col gap-1">
            Logo
            <small className="text-muted-foreground">
              The icon of your product
            </small>
          </Label>

          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="logo"
          />
          <div className="flex flex-col text-xs">
            <span className=" text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className=" text-muted-foreground">
              Allowed formats: PNG, JPEG
            </span>
            <span className=" text-muted-foreground">
              Maximum file size: 1MB
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
}

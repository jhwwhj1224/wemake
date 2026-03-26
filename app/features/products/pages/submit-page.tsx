import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Submit Product | WeMake" }];
};

export default function SubmitPage() {
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
        </div>
      </Form>
    </div>
  );
}

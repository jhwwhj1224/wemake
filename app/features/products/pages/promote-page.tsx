import { DateTime } from "luxon";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Form, type MetaFunction } from "react-router";
import { Hero } from "~/common/components/hero";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";

export const meta: MetaFunction = () => {
  return [{ title: "Promote Product | WeMake" }];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days",
        ).days
      : 0;
  return (
    <div>
      <Hero
        title="Promote Product"
        subtitle="Boost your product's visibility and reach with our promotion services."
      />
      <Form className="max-w-md mx-auto gap-10 flex flex-col">
        <SelectPair
          label="Select a product"
          description="Select a product to promote"
          name="product"
          required
          placeholder="Select a product"
          options={[
            { label: "Product 1", value: "product-1" },
            { label: "Product 2", value: "product-2" },
          ]}
        />
        <div className="flex flex-col gap-2 w-full items-center">
          <Label className="flex flex-col gap-2">
            Select a range of dates
            <small className="text-muted-foreground block text-center">
              Minimum duration is 3 day
            </small>
          </Label>
          <Calendar
            className="w-2/3s"
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout (${totalDays * 20} <span className="text-sm">USD</span>
          )
        </Button>
      </Form>
    </div>
  );
}

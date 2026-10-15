import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  { id: "tip-10", value: 0.1, text: "10%" },
  { id: "tip-20", value: 0.2, text: "20%" },
  { id: "tip-50", value: 0.5, text: "50%" },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
            <label htmlFor={tipOption.id}>{tipOption.text}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CustomColorInput: React.FC = () => {
  const [colorInput, setColorInput] = useState("");
  const [isValidColor, setIsValidColor] = useState(false);

  useEffect(() => {
    const isValid = CSS.supports("color", colorInput);
    setIsValidColor(isValid);
  }, [colorInput]);

  const getContrastColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  const contrastColor = isValidColor ? getContrastColor(colorInput) : "#000000";

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Custom Color Preview</CardTitle>
        <CardDescription>
          Enter a color name, hex, RGB, or HSL value
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="colorInput">Color Input</Label>
            <Input
              id="colorInput"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              placeholder="Enter color (e.g., #FF5733, rgb(255,87,51), blue)"
            />
          </div>
          {isValidColor && (
            <div className="space-y-2">
              <div
                className="w-full h-20 rounded"
                style={{ backgroundColor: colorInput, color: contrastColor }}
              >
                <p className="p-2">Background Color</p>
              </div>
              <p style={{ color: colorInput }}>Text Color</p>
              <div
                className="border-4 rounded p-2"
                style={{ borderColor: colorInput }}
              >
                Border Color
              </div>
              <div>
                <p className="font-semibold">Tailwind CSS:</p>
                <code className="text-sm bg-gray-100 p-1 rounded">
                  bg-[{colorInput}] text-[{colorInput}] border-[{colorInput}]
                </code>
              </div>
              <div>
                <p className="font-semibold">CSS Variable:</p>
                <code className="text-sm bg-gray-100 p-1 rounded">
                  --custom-color: {colorInput};
                </code>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomColorInput;

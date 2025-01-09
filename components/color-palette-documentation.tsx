"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomColorInput from "./custom-color-input";

const ExpandedColorPaletteDocumentation: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">
        Expanded Color Palette Documentation
      </h1>

      <CustomColorInput />

      <Tabs defaultValue="light" className="w-full">
        <TabsList>
          <TabsTrigger value="light">Light Mode</TabsTrigger>
          <TabsTrigger value="dark">Dark Mode</TabsTrigger>
        </TabsList>
        <TabsContent value="light">
          <LightModeColors />
        </TabsContent>
        <TabsContent value="dark">
          <DarkModeColors />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const LightModeColors: React.FC = () => (
  <div className="space-y-8">
    <BaseColors />
    <InteractiveColors />
    <FunctionalColors />
    <StateColors />
    <ChartColors />
    <SidebarColors />
  </div>
);

const DarkModeColors: React.FC = () => (
  <div className="space-y-8">
    <BaseColors darkMode />
    <InteractiveColors darkMode />
    <FunctionalColors darkMode />
    <StateColors darkMode />
    <ChartColors darkMode />
    <SidebarColors darkMode />
  </div>
);

const BaseColors: React.FC<{ darkMode?: boolean }> = ({ darkMode = false }) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Base Colors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ColorCard
        name="Background"
        hsl={darkMode ? "222.2 84% 4.9%" : "0 0% 100%"}
        usage="bg-background"
        description="Main background color"
      />
      <ColorCard
        name="Foreground"
        hsl={darkMode ? "210 40% 98%" : "0 0% 12%"}
        usage="text-foreground"
        description="Primary text color"
      />
      <ColorCard
        name="Muted"
        hsl={darkMode ? "217.2 32.6% 17.5%" : "233 76% 94%"}
        usage="bg-muted"
        description="Used for active dropdown, in range of calendar"
      />
      <ColorCard
        name="Muted Foreground"
        hsl={darkMode ? "215 20.2% 65.1%" : "200 0% 33%"}
        usage="text-muted-foreground"
        description="Muted text color"
      />
      <ColorCard
        name="Card"
        hsl={darkMode ? "222.2 84% 4.9%" : "0 0% 100%"}
        usage="bg-card"
        description="Card background color"
      />
      <ColorCard
        name="Card Foreground"
        hsl={darkMode ? "210 40% 98%" : "0 0% 12%"}
        usage="text-card-foreground"
        description="Card text color"
      />
    </div>
  </section>
);

const InteractiveColors: React.FC<{ darkMode?: boolean }> = ({
  darkMode = false,
}) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Interactive Colors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ColorCard
        name="Primary"
        hsl={darkMode ? "210 40% 98%" : "230 56% 44%"}
        usage="bg-primary text-primary-foreground"
        description="Used for primary buttons"
      />
      <ColorCard
        name="Primary Foreground"
        hsl={darkMode ? "222.2 47.4% 11.2%" : "0 0% 100%"}
        usage="text-primary-foreground"
        description="Text color for primary buttons"
      />
      <ColorCard
        name="Secondary"
        hsl={darkMode ? "217.2 32.6% 17.5%" : "232.8 75.76% 93.53%"}
        usage="bg-secondary text-secondary-foreground"
        description="Used for secondary buttons"
      />
      <ColorCard
        name="Secondary Foreground"
        hsl={darkMode ? "210 40% 98%" : "0 0% 44%"}
        usage="text-secondary-foreground"
        description="Text color for secondary buttons"
      />
      <ColorCard
        name="Accent"
        hsl={darkMode ? "217.2 32.6% 17.5%" : "233 100% 98%"}
        usage="bg-accent text-accent-foreground"
        description="Used for hover effects"
      />
      <ColorCard
        name="Accent Foreground"
        hsl={darkMode ? "210 40% 98%" : "230.08 56.44% 44.12%"}
        usage="text-accent-foreground"
        description="Text color for accented elements"
      />
    </div>
  </section>
);

const FunctionalColors: React.FC<{ darkMode?: boolean }> = ({
  darkMode = false,
}) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Functional Colors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ColorCard
        name="Destructive"
        hsl={darkMode ? "0 62.8% 30.6%" : "0 100% 97%"}
        usage="bg-destructive text-destructive-foreground"
        description="Background for error messages"
      />
      <ColorCard
        name="Destructive Foreground"
        hsl={darkMode ? "210 40% 98%" : "0 98% 54%"}
        usage="text-destructive-foreground"
        description="Text color for errors"
      />
      <ColorCard
        name="Border"
        hsl={darkMode ? "217.2 32.6% 17.5%" : "231 73% 84%"}
        usage="border-border"
        description="Used for component borders"
      />
      <ColorCard
        name="Input"
        hsl={darkMode ? "217.2 32.6% 17.5%" : "231 73% 84%"}
        usage="bg-input"
        description="Used for input fields"
      />
      <ColorCard
        name="Ring"
        hsl={darkMode ? "212.7 26.8% 83.9%" : "231 73% 84%"}
        usage="ring-ring"
        description="Used for focus rings"
      />
    </div>
  </section>
);

const StateColors: React.FC<{ darkMode?: boolean }> = ({
  darkMode = false,
}) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">State Colors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ColorCard
        name="Neutral Gray"
        hsl="0 0% 94%"
        usage="bg-[hsl(var(--neutral-gray))]"
        description="Used for gray borders"
      />
      <ColorCard
        name="Green"
        hsl="120 100% 97%"
        usage="bg-[hsl(var(--green))]"
        description="Background for success messages"
      />
      <ColorCard
        name="Green Foreground"
        hsl="119 100% 31%"
        usage="text-[hsl(var(--green-foreground))]"
        description="Text color for success messages"
      />
      <ColorCard
        name="Section"
        hsl="240 60% 99%"
        usage="bg-[hsl(var(--section))]"
        description="Used for some card headers and sections"
      />
    </div>
  </section>
);

const ChartColors: React.FC<{ darkMode?: boolean }> = ({
  darkMode = false,
}) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Chart Colors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ColorCard
        name="Chart Magenta"
        hsl="295 100% 52%"
        usage="text-[hsl(var(--chart-magenta))]"
        description="Used for line graphs"
      />
      {[...Array(48)].map((_, i) => (
        <ColorCard
          key={i}
          name={`Chart ${i + 1}`}
          hsl={
            darkMode
              ? i < 5
                ? [
                    "220 70% 50%",
                    "160 60% 45%",
                    "30 80% 55%",
                    "280 65% 60%",
                    "340 75% 55%",
                  ][i]
                : "N/A"
              : `var(--chart-${i + 1})`
          }
          usage={`text-[hsl(var(--chart-${i + 1}))]`}
          description={`Chart color ${i + 1}`}
        />
      ))}
    </div>
  </section>
);

const SidebarColors: React.FC<{ darkMode?: boolean }> = ({
  darkMode = false,
}) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Sidebar Colors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ColorCard
        name="Sidebar Background"
        hsl={darkMode ? "240 5.9% 10%" : "0 0% 100%"}
        usage="bg-[hsl(var(--sidebar-background))]"
        description="Sidebar background color"
      />
      <ColorCard
        name="Sidebar Foreground"
        hsl={darkMode ? "240 4.8% 95.9%" : "240 5.3% 26.1%"}
        usage="text-[hsl(var(--sidebar-foreground))]"
        description="Sidebar text color"
      />
      <ColorCard
        name="Sidebar Primary"
        hsl={darkMode ? "224.3 76.3% 48%" : "240 5.9% 10%"}
        usage="bg-[hsl(var(--sidebar-primary))]"
        description="Primary sidebar color"
      />
      <ColorCard
        name="Sidebar Primary Foreground"
        hsl={darkMode ? "0 0% 100%" : "0 0% 98%"}
        usage="text-[hsl(var(--sidebar-primary-foreground))]"
        description="Primary sidebar text color"
      />
      <ColorCard
        name="Sidebar Accent"
        hsl={darkMode ? "240 3.7% 15.9%" : "233 100% 98%"}
        usage="bg-[hsl(var(--sidebar-accent))]"
        description="Sidebar accent color"
      />
      <ColorCard
        name="Sidebar Accent Foreground"
        hsl={darkMode ? "240 4.8% 95.9%" : "240 5.9% 10%"}
        usage="text-[hsl(var(--sidebar-accent-foreground))]"
        description="Sidebar accent text color"
      />
      <ColorCard
        name="Sidebar Border"
        hsl={darkMode ? "240 3.7% 15.9%" : "0 0% 94%"}
        usage="border-[hsl(var(--sidebar-border))]"
        description="Sidebar border color"
      />
      <ColorCard
        name="Sidebar Ring"
        hsl={darkMode ? "217.2 91.2% 59.8%" : "0 0% 94%"}
        usage="ring-[hsl(var(--sidebar-ring))]"
        description="Sidebar focus ring color"
      />
    </div>
  </section>
);

interface ColorCardProps {
  name: string;
  hsl: string;
  usage: string;
  description: string;
}

const ColorCard: React.FC<ColorCardProps> = ({
  name,
  hsl,
  usage,
  description,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`w-full h-20 rounded ${usage}`}
          style={{ backgroundColor: `hsl(${hsl})` }}
        ></div>
        <p className="mt-2 text-sm font-mono">{usage}</p>
        <p className="mt-1 text-xs text-muted-foreground">{hsl}</p>
      </CardContent>
    </Card>
  );
};

export default ExpandedColorPaletteDocumentation;
